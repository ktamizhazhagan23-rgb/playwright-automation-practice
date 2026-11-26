import { Locator, Page, expect } from '@playwright/test';

class cartPage {
    readonly page: Page;
    readonly cartLoc: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLoc = page.getByRole('link', {
            name: 'Add to cart',
            exact: true
        });
    }
    async addToCart(): Promise<void> {
        await expect(this.cartLoc).toBeVisible();
        await this.cartLoc.click();
    }
}
export default cartPage;
