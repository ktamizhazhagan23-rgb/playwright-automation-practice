import { test, expect, chromium } from "@playwright/test"

test('Handling Tabs and new pages/windows practice', async () => {

    //create browser
    const browser = await chromium.launch()

    //create context
    const context = await browser.newContext()

    //create page
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')

    /*click on New Tab button  - this below 2 lines - won't work - 
    because we need to trigger both ine parallelly - so w can use promise.all()*/
    // context.waitForEvent('page')
    // await page.locator("button:has-text('New Tab')").click()

    //use promise.all() method to access child tab
    const [childPage] = await Promise.all([context.waitForEvent('page'), await page.locator("button:has-text('New Tab')").click()])
    await page.waitForTimeout(5000)

    const pages = context.pages()      // call it HERE, after the tab exists
    console.log(pages.length)          // should now print 2
    console.log(await pages[0].title())
    console.log(await pages[1].title())
    //page.waitForTimeout(5000)

    //approach alternate - use the variable name 
    console.log("parent page:", page.title())
    console.log("child page:", childPage.title())
})