import { test, expect, Locator } from "@playwright/test"

test('Hande Normal alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Register a dialog handler
    page.on('dialog', (dialog) => {

        //print return type of the handler (alert or confirm )
        console.log("Dialog Type: ", dialog.type())

        //verify the type
        expect(dialog.type()).toContain('alert')

        //return the message from dialog
        console.log("Dialog Text:", dialog.message())

        //validate the text in dialog
        expect(dialog.message()).toContain('I am an alert box!')

        //accept the dialog
        dialog.accept()
    })

    //Now, outside handler - click on OK
    await page.getByText("Simple Alert").click()
    await page.waitForTimeout(5000)
})


test('Hande confirmation alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Register a dialog handler
    page.on('dialog', (dialog) => {

        //return type of the handler (alert or confirm )
        console.log("Dialog type: ", dialog.type())

        //verify the type
        expect(dialog.type()).toContain('confirm')

        //return the message from dialog
        console.log("Dialog message: ", dialog.message())

        //validate the text in dialog message
        expect(dialog.message()).toContain('Press a button!')

        //accept the dialog
        dialog.accept()
    })

    //Now, ousidle the page.on method - click on OK
    await page.getByText('Confirmation Alert').click()
    await page.waitForTimeout(5000)

    //capture the message (pressed OK or Cancel) - from Website
    let clickInfo = page.locator('#demo')
    let Resulttext = await clickInfo.innerText()
    console.log(Resulttext)

    //verify the text is correct or not
    expect(Resulttext).toContain('You pressed OK!')
})


test.only('Hande Prompt alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Register a dialog handler
    page.on('dialog', (dialog) => {

        //return type of the handler (alert or confirm )
        console.log("Dialog Type: ", dialog.type())

        //verify the type
        expect(dialog.type()).toContain('prompt')

        //return the message from dialog
        console.log("Dialog Message: ", dialog.message())

        //validate the text in dialog message
        expect(dialog.message()).toContain('Please enter your name:')

        //default value - printn
        console.log(dialog.defaultValue())

        //replace the default value along accept the dialog
        dialog.accept('John')
    })

    //Now, ousidle the page.on method - click on OK
    await page.getByText('Prompt Alert').click()

    //capture the message (pressed OK or Cancel) - from Website
    let resTxt = await page.locator('#demo').innerText()
    console.log("Result text: ", resTxt)

    //verify the text is correct or not
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?')
})