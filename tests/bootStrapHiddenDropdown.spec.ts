import { test, expect, Locator } from "@playwright/test"

test('Bootstrap and Hidden dropdown Practics', async ({ page }) => {
    //launch the orange hrm website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000 })

    //login to the application
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()

    //click on PIM
    await page.locator("a.oxd-main-menu-item").nth(1).click()

    //click on Job title dropdown
    const dropDown: Locator = page.locator(".oxd-select-text--after").nth(2)
    await dropDown.click()

    //capture all the dropdown options and count
    const allOptions: Locator = page.locator("[role='listbox']>div>span")
    await page.waitForTimeout(5000)
    let count: number = await allOptions.count()
    console.log("count of all DD options: ", await allOptions.count())

    //print all the options
    console.log(await allOptions.allTextContents())

    //select/click an option --> Automaton Tester
    for (let i = 0; i < count; i++) {
        const text: any = await allOptions.nth(i).innerText()
        if (text === 'Automaton Tester') {
            await allOptions.nth(i).click()
            break
        }
    }

})