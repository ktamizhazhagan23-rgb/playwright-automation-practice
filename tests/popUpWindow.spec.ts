import { test, expect, chromium } from "@playwright/test"

test('popUp window practice', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')

    // page.waitForEvent('popup')
    // page.locator("button:has-text('Popup Windows')")
    const [childPage] = await Promise.all([page.waitForEvent('popup'), page.locator("button:has-text('Popup Windows')").click()])

    await expect.poll(() => context.pages().length, { timeout: 10000 }).toBe(3)
    const pages = context.pages()

    //count pages - both child and parent tab
    console.log("number of pages created: ", pages.length)

    //one approach - might not work - due to timeout
    console.log('print playwright URL: ',await  pages[2].title())


    //second approach - for loop
    for (const pw of pages) {
        const title = pw.title()
        if((await title).includes('playwright'))
        {
            await page.locator("button:has-text('Get started')").click()
            page.waitForTimeout(5000)
        }
    }
})