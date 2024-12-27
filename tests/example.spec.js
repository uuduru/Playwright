// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


test('visit ecole d ingenieurs', async ({ page }) => {
  // const browser = await chromium.launch(); 
  // const page = await browser.newPage();

  // Given That I'm at Ecole Polytechnique website
  await page.goto('https://www.polytechnique.edu/'); // Replace with the accurate URL
  
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  // Then Visit CentraleSupelec website
  await page.goto('https://www.centralesupelec.fr/'); // Replace with the accurate URL

  // Then Visit Telecom ParisTech website
  await page.goto('https://www.telecom-paris.fr/'); // Replace with the accurate URL

  // Then Visit INSA Lyon website
  await page.goto('https://www.insa-lyon.fr/'); // Replace with the accurate URL

  
  await page.goto('https://www.ensta-paris.fr/'); // Replace with the accurate URL

  // Then Close Browser
  await page.close();
});
