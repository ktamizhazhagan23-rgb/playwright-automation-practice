import {test, expect, Locator} from "@playwright/test"

test('CSS Selector Practice', async ({page})=>{
   await page.goto('https://demowebshop.tricentis.com/login')


   //tag #id
   const searchItem : Locator = page.locator('input#small-searchterms')
   await searchItem.fill('T-Shirt')


   //tag.class
   const classCSSselector : Locator = page.locator('input.search-box-text')
   await classCSSselector.clear()


   //tag[attribute='value']
   const attributevalue : Locator = page.locator("[name='Email']")
   await attributevalue.fill('tamizh@gamil.com')


   //tag.class[attribute='value']
   const classWithAttribute : Locator = page.locator("input.password[name='Password']")
   await classWithAttribute.fill('test123')
   console.log(classWithAttribute.textContent())


   //few more methods in CSS
   
   //tag[id^='value'] --> ^ means 'start with'

   //tag[id$ = 'value']  --> $ means 'end with'

   //tag[id* = 'value'] ==> * act as 'contains'
})