import {test, expect, Page} from "@playwright/test"

let page : Page

test.beforeAll("open app", async({browser})=>{
    
    page = await browser.newPage()
    page.goto('https://www.demoblaze.com/index.html')

})

test.afterAll('close browser', async()=>{
    await page.close()
})


test.beforeEach('login step', async()=>{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("[onclick='logIn()']")
    page.waitForTimeout(2000)
})


test.afterEach('logout', async ()=>{
    page.locator("[onclick='logOut()']")
})

