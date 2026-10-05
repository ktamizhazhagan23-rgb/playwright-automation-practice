import { test, expect, Locator } from "@playwright/test"

test('Auto suggest drop down practice', async ({ page }) => {

    //Launch a page
    await page.goto('https://www.flipkart.com/')
    await page.locator("[role='button']").click()
    const searchOption: Locator = page.getByPlaceholder('Search for Products, Brands and More').first()
    await searchOption.fill('smart')
    await page.waitForTimeout(5000)

    //get all the suggested option --> use emulate focused
    const allSuggestedOptions: Locator = page.locator('ul>li')

    //count of suggested options
    const count: any = await allSuggestedOptions.count()
    console.log(count)

    //print all the suggested option inn the console
    console.log(await allSuggestedOptions.allTextContents())

    //select or click on some option (eg-smartphone) --> for loop
    for (let i = 0; i < count; i++) {
        const text = await allSuggestedOptions.nth(i).innerText()
        if (text === 'smartphone') {
            await allSuggestedOptions.nth(i).click()
            break
        }
    }
})