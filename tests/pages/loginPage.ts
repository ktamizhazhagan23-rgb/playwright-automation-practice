import {Page} from "@playwright/test"

export class LoginPage {
    constructor(private page: Page) {}
    username = () => this.page.getByLabel('Username')
    async login(user: string, pass: string) {
        await this.username().fill(user)
        await this.page.getByLabel('Password').fill(pass)
        await this.page.getByRole('button', { name: 'Log In' }).click()
    }
}