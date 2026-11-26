import {test, expect, Locator} from "@playwright/test"

test('Hard and Soft Assertions Practice', async ({page})=>{
     await page.goto('https://demowebshop.tricentis.com/login')

     //Hard Assertions
   /*  await expect(page).toHaveTitle('Demo Web Shop. Login')
     await expect(page).toHaveURL('https://demowebshop.tricentis.com/login')

     await page.getByAltText('Tricentis Demo Web Shop') */

     //soft Assertions - even the title validation is failed, the URL validation is passed - Done
    await expect.soft(page).toHaveTitle('Demo Web Shop')
     await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/login')

     await page.getByAltText('Tricentis Demo Web Shop')    
})