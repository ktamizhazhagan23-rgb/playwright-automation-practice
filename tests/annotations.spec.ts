import {test, expect} from "@playwright/test"

test('test1', async ({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
    console.log('test1')
})

test.skip('test2', async ({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
     console.log('test2')
})

test.fixme('test3', async ({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
     console.log('test3')
})

test('test4', async ({page})=>{
    //slow()

    test.slow()
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
     console.log('test4')
})

test('test5', async ({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Googlae')
     console.log('test5')
})