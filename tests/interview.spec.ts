import {test, expect, Locator} from "@playwright/test"

test('Interview practice', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#textarea').fill("Test")
    const maleCheckbox = page.locator('#male')   // locator only, no await
    await maleCheckbox.check()                   // the action
    await expect(maleCheckbox).toBeChecked()     // the assertion

    //female uncheck validation
    const femalecheckBox = page.locator('#female')
    await expect(femalecheckBox).not.toBeChecked()

    //radio button
    const radioBtn = page.locator('#sunday')
    await radioBtn.check()

    //for loop practice for checking check boxes
    const checkBoxes = page.locator("//label[@class='form-check-label']")
    await expect(checkBoxes).toHaveCount(9)

    for(let checkBx of await checkBoxes.all())
    {
        await checkBx.check()
    }
})