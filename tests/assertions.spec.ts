import {test, expect, chromium} from "@playwright/test"

test('Types of assertions practices', async ({page}) =>{

  
    //test.setTimeout(40000)
    await page.goto('https://demowebshop.tricentis.com/login')

    //Auto-Retrying Assertions
    const emailValue = await page.locator('#Email').fill('tamizh21@gmail.com')
    const password = await page.locator('#Password').fill('tamizh123')
    //await page.locator("input[type='submit']").nth(1)

    //Non_Retrying Assertions
    const title = await page.title()
    expect(title.includes('"Demo Web Shop. Login'))

    //negating matcher - applicable for both Auto-Retrying and Non-REtrying assertions
    //expect(title.not.includes('not a shop'))
    expect(title).not.toContain('example nnegating matcher')
    
    
})