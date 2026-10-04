import { test, expect, Locator } from "@playwright/test"

test('multi Select dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')


    //Select oprions from the dropdown - 4 ways

    //approach 1 - using Visible Text
    await page.locator('#colors').selectOption(['Red', 'Yellow'])

    //approach 2 - using Value Attribute
    await page.locator('#colors').selectOption(['white', 'green'])

    //approach 3 - using label (same as app 1 - visible Text)
    await page.locator('#colors').selectOption([{ label: 'Blue' }, { label: 'Red' }])

    //approach 4 - using index
    await page.locator('#colors').selectOption([{ index: 1 }, { index: 2 }])


    //check the number of options in the dropdown
    const colorCount: Locator = page.locator('#colors>option')
    await expect(colorCount).toHaveCount(7)

    //check and return all the options present in the dropdown
    const alltext: Locator = page.locator('#colors>option')
    console.log(await alltext.allTextContents())

    //check and return all the options present in the dropdown
    const alltxtValue : string[] = ((await alltext.allTextContents()).map(text=>text.trim()))
    console.log(expect(alltxtValue))

    //check one of the value is present or  not
    expect(alltxtValue).toContain('Red')

    await page.waitForTimeout(5000)

})