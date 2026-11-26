import { test, expect, chromium, Locator } from "@playwright/test"

test('browser context practice', async () => {
    /*if we don't use {page} fixture in the 
    test - We need to create our own Browser, own 
    context - from that context we need to create our own page*/

    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()

    //create a new page
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    await page1.goto('https://playwright.dev/')
    await expect(page1).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
    page2.waitForTimeout(5000)

    //work with page2 - it will open in same browser - but a new tab
    await page2.goto('https://www.selenium.dev/')
    expect(page2).toHaveTitle('Selenium')
    await page2.waitForTimeout(5000)
})

