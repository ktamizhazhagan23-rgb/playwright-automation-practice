import { test, expect, Locator } from "@playwright/test"

test('pwActions Practice', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //locate the element
    const textBox: Locator = page.locator('#name')
    await expect(textBox).toBeVisible()
    await expect(textBox).toBeEnabled()

    //input box - fill method
    await textBox.fill('Tamizh')

    //check filled or not
    const inputValue: any = await textBox.inputValue()

    //print the input value
    console.log("input value: ", inputValue)

    //capture the value of any attribute
    const maxLength: string | null = await textBox.getAttribute('maxlength')
    expect(maxLength).toBe("15")
})


test.only('CheckBox and RadioButton Practice', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const radioButton: Locator = page.locator('#male')
    //await radioButton.click()   --> click() also works
    await radioButton.check()
    expect(await radioButton.isChecked()).toBe(true) //not-preferable way

    //click on female radio button
    const femaleRadioBtn: Locator = page.locator('#female')
    await femaleRadioBtn.check()
    await expect(femaleRadioBtn).toBeChecked() //preferable way


    //checkboxes practices --> select "sunday" using "locator"
    const sundayCheckBox: Locator = page.locator('#sunday')
    await sundayCheckBox.check()
    await expect(sundayCheckBox).toBeChecked()

    //select monday using "getByLabel"
    const MondayCheckBox: Locator = page.getByLabel('Monday')
    await MondayCheckBox.check()

    //select multiple checkboxes 
    const days: string[] = ['Tuesday', 'Wednesday', 'Thursday']
    //index is variable and passing the days index to --> getByLabel(index) and it will return Checkboxes in the form of an Array
    const checkBoxLoc: Locator[] = days.map(index => page.getByLabel(index)) // its a syntax - needs to be memorized - //days.map(index => page.getByLabel(index))
    await expect(checkBoxLoc.length).toBe(3)

    //to select multiple check boxes - we need to iterate 
    //use loop statement
    for (const checkBox of checkBoxLoc) {
        await checkBox.check()
        await expect(checkBox).toBeChecked()
    }

    //to unselect few checkBox
    for (const checkBox of checkBoxLoc.slice(-3)) {
        await checkBox.uncheck()
        await expect(checkBox).not.toBeChecked()
    }

    // if check box is checked -> Do UNCHECK & if the check box is unchecked -> DO CHECK the checkBox
    for (const checkBox of checkBoxLoc) {
        //if checked - do UNCHECK
        if (await checkBox.isChecked()) {
            await checkBox.uncheck()
            await expect(checkBox).not.toBeChecked()
        }
        else {
            await checkBox.check()
            await expect(checkBox).toBeChecked()
        }
    }

    //Now, unselect all
    for (const checkBox of checkBoxLoc) {
        await checkBox.uncheck()
        await expect(checkBox).not.toBeChecked()
    }

    //Randomly check the checkboxes using indexes
    const indexes: number[] = [1, 2]
    for (const i of indexes) {
        await checkBoxLoc[i].check()
        await expect(checkBoxLoc[i]).toBeChecked()
    }
})



