import { test, expect, type Page } from "@playwright/test";

const viewports = [
  { name: "Small phone", width: 320, height: 568, mobile: true },
  { name: "Standard phone", width: 390, height: 844, mobile: true },
  { name: "Large phone", width: 414, height: 896, mobile: true },
  { name: "iPad portrait", width: 768, height: 1024, mobile: false },
  { name: "iPad landscape", width: 1024, height: 768, mobile: false },
  { name: "Laptop", width: 1280, height: 800, mobile: false },
  { name: "Wide desktop", width: 1440, height: 900, mobile: false },
];

const sections = ["home", "about", "projects", "skills", "contact"];

async function hasNoHorizontalOverflow(page: Page) {
  return page.evaluate(
    () =>
      document.documentElement.scrollWidth <= window.innerWidth + 1 &&
      document.body.scrollWidth <= window.innerWidth + 1,
  );
}

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}x${vp.height})`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test("no horizontal overflow", async ({ page }) => {
      await page.goto("/");
      expect(await hasNoHorizontalOverflow(page)).toBe(true);
    });

    test("all sections present", async ({ page }) => {
      await page.goto("/");
      for (const id of sections) {
        await expect(page.locator(`#${id}`)).toHaveCount(1);
      }
    });

    test("navigation matches viewport", async ({ page }) => {
      await page.goto("/");
      const menuButton = page.getByRole("button", { name: /open menu/i });
      const desktopAbout = page
        .locator("nav .hidden.md\\:flex a", { hasText: "About" })
        .first();

      if (vp.mobile) {
        await expect(menuButton).toBeVisible();
        await menuButton.click();
        const panel = page.locator("#mobile-menu");
        await expect(panel.getByText("Projects")).toBeVisible();
        await expect(panel.getByText("Contact")).toBeVisible();
        await panel.getByText("Skills").click();
        await expect(page).toHaveURL(/#skills/);
      } else {
        await expect(menuButton).toBeHidden();
        await expect(desktopAbout).toBeVisible();
      }
    });

    test("email visible in footer", async ({ page }) => {
      await page.goto("/");
      const footer = page.locator("#contact");
      await expect(
        footer.getByText("christianpaulamorin28@gmail.com"),
      ).toBeVisible();
    });

    test("profile image and project cards render", async ({ page }) => {
      await page.goto("/");
      await expect(
        page.getByRole("img", { name: "Christian Paul A. Amorin" }),
      ).toBeVisible();

      for (const title of ["PeerMatch", "DPT ONE", "TableBite"]) {
        await expect(
          page.getByRole("heading", { name: title, level: 3 }),
        ).toBeVisible();
      }
    });
  });
}
