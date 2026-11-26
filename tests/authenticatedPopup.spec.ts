import { test, expect, chromium } from "@playwright/test"

test('Handle Authenticated popUp', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } })
    const page = await context.newPage()

    //page.goto('https://the-internet.herokuapp.com/basic_auth')

    //Approach 1 - Not preferable
    // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    // await expect(page.locator("text=Congratulations! You must have the proper credentials")).toBeVisible()
    // console.log(await page.locator('body').innerText())

    //approach 2 - preferable
    await page.goto('https://the-internet.herokuapp.com/basic_auth')
    await expect(page.locator("text=Congratulations! You must have the proper credentials")).toBeVisible()
})