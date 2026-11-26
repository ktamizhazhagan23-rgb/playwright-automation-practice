# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sdetLoginTest.spec.ts >> sdet login practice
- Location: tests\sdetLoginTest.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('sdet login practice', async({page})=>{
  4  | 
  5  |     await page.goto('https://www.demoblaze.com/index.html')
  6  |     await page.locator('#login2').click()
  7  |     await page.locator('#loginusername').fill('pavanol')
  8  |     await page.locator('#loginpassword').fill('test@123')
  9  |     await page.locator("[onclick='logIn()']").click()
> 10 |     page.waitForTimeout(3000)
     |          ^ Error: page.waitForTimeout: Test ended.
  11 | })
  12 | 
```