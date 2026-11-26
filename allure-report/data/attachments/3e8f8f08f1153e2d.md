# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practiceLogin.spec.ts >> Login practice to sausedemo page
- Location: tests\practiceLogin.spec.ts:9:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "", waiting until "load"

```

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | import LoginPage from '../pages/loginPage';
  2  | import {test, expect} from "@playwright/test"
  3  | 
  4  | test.beforeEach(async ({page})=>{
  5  |     let loginPage = new LoginPage(page)
  6  |     loginPage.open()
  7  | })
  8  | 
  9  | test ('Login practice to sausedemo page', async ({page}) =>{
  10 |     
> 11 |     await page.getByPlaceholder('Username').fill('standard_user')
     |                                             ^ Error: locator.fill: Test ended.
  12 |     await page.getByPlaceholder('Password').fill('secret_sauce')
  13 |     await page.locator("[type='submit']").click()
  14 | 
  15 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  16 |     await expect(page).toHaveTitle('Swag Labs')
  17 | })
```