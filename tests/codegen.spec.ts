import { test, expect } from '@playwright/test';

//this i the test file - we have created manually by only giving command --> npx playwright codegen 
test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/login');
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('book');
  await page.getByText('Health Book').click();
  await page.locator('#add-to-cart-button-22').click();
});