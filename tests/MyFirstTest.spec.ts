import {test, expect} from "@playwright/test"

test('verify page title', async  ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    let title:string = await page.title()
    await expect(page).toHaveTitle('OrangeHRM')
})