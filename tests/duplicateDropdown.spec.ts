import { test, expect, Locator } from "@playwright/test"

test('duplicate dropdown practice', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const duplicateOptions: Locator = page.locator('#colors>option')

    const handleDuplicate: string[] = (await duplicateOptions.allTextContents()).map(text => text.trim())

    const myset = new Set<string>()
    const duplicatesArray: string[] = []

    for (const dupli of handleDuplicate) {
        if (myset.has(dupli)) {
            duplicatesArray.push(dupli)
        }
        else {
            myset.add(dupli)
        }
    }
    console.log(duplicatesArray)
})