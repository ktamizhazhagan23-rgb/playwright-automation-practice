import { Locator, Page } from '@playwright/test';

class sdetLogin {

    readonly page: Page;
    readonly loginbtn : Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;  

    constructor(page: Page) {
        this.page = page;
        this.loginbtn = page.locator('#login2')
        this.userNameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator("[onclick='logIn()']");
    }

     async launchUrl(): Promise<void> {
     await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async sdetLogin(username: string, password: string) {

        await this.loginbtn.click()
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
  
}
export default sdetLogin;
