import LoginPage from '../pages/loginPage';
import {test, expect} from "@playwright/test"

test.beforeEach(async ({page})=>{
    let loginPage = new LoginPage(page)
    loginPage.open()
})

test ('Login practice to sausedemo page', async ({page}) =>{
    
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator("[type='submit']").click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
})