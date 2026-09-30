import { test, expect, Locator } from "@playwright/test"

test('Dynamic Element Practice', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //click single time
    const dynamicLocator: Locator = await page.locator("//button[@class='start' or @class = 'stop']")
    //     await  expect(dynamicLocator).toBeVisible()
    //    await  dynamicLocator.click()


    //using for loo - click on start and stop again and again
    for (let i = 0; i <= 5; i++) {
        await dynamicLocator.click()

        await page.waitForTimeout(2000)
    }
})