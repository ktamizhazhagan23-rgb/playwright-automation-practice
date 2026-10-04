import {test, expect, Locator} from "@playwright/test"

test('single drop down', async ({page})=>{
       await page.goto('https://testautomationpractice.blogspot.com/')

       //Select oprions from the dropdown - 4 ways

       //approach 1 - using Visible Text
       await page.locator('#country').selectOption('India')

       //approach 2 - using Value Attribute
       await page.locator('#country').selectOption({value:'germany'})

       //approach 3 - using label (same as app 1 - visible Text)
       await page.locator('#country').selectOption({label : 'India'})

       //approach 4 - using index
       await page.locator('#country').selectOption({index :  4})


    //check the number of options in the dropdown
    const Count : Locator = page.locator('#country>option')
    await expect(Count).toHaveCount(10)


    //check and return all the options present in the dropdown
    const allElements : Locator = page.locator('#country>option')
    console.log(await allElements.allTextContents())


    //check and return all the options present in the dropdown
    const optiontext : string[] = ((await allElements.allTextContents()).map(text=>text.trim()))
    console.log(optiontext)


    //check one of the value is present or  not
    await expect(optiontext).toContain('India')
})