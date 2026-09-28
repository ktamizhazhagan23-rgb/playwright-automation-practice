import {test, expect} from "@playwright/test"

test('verify page URL', async  ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    let url:string = await page.url()
    await expect(page).toHaveURL(/opensource-demo.orangehrmlive.com/)
})