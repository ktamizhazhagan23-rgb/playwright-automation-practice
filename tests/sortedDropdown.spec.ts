import { test, expect, Locator } from "@playwright/test"

test('sortedDropdown practice', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //const sortedOptions : Locator = page.locator('#animals>option')

    const sortedOptions: Locator = page.locator('#colors>option')

    //const optionText : string[] = (await sortedOptions.allTextContents())

    const optionText: string[] = (await sortedOptions.allTextContents()).map(text => text.trim())

    /*If you wrote sortedList = optionText.sort(), it would also sort originalList,
    because they're the same array in memory — you'd lose your "original" for comparison
    [...optionText] creates a fresh copy of the array first 
    (this is called the "spread operator"), so .sort() only affects the copy, leaving optionText/originalList untouched */
    const originalList: string[] = optionText
    const sortedList: string[] = [...optionText].sort()

    console.log(originalList)
    console.log(sortedList)

    expect(originalList).not.toEqual(sortedList)
})