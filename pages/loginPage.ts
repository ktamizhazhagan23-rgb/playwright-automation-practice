import { Page } from '@playwright/test';

class LoginPage {

    readonly page: Page;
    readonly baseURL: string;

    constructor(page: Page) {
        this.page = page;
        const url = process.env.BASE_URL;
        this.baseURL = process.env.BASE_URL ?? '';
    }

    async open(): Promise<void> {
        await this.page.goto(this.baseURL);
    }
}

export default LoginPage;