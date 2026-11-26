import { expect, Page } from '@playwright/test';

export default class HomePage {

    constructor(private page: Page) {}

    async verifyHomePage() {

        await expect(
            this.page.locator('h1')
        ).toHaveText('Logged In Successfully');
    }

}