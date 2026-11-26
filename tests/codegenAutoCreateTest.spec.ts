import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/login');
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('books');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('checkbox', { name: 'Advanced search' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'Advanced searchs' }).check();
  await expect(page.locator('#advanced-search-block')).toContainText('Manufacturer:');
  await page.locator('form').filter({ hasText: 'Search keyword: Advanced' }).getByRole('button').click();
  await expect(page.locator('body')).toContainText('No products were found that matched your criteria.');
});