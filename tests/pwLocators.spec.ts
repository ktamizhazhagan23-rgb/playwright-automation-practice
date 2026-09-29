import { test, expect, Locator } from '@playwright/test';

test('Verify playwright locators', async ({ page }) => {
      await page.goto('https://practice.expandtesting.com/')

      //Locator is also one fo the fixture(we need to import in this class), similar like {test, expect}
      //All the Built in Methods will return LOCATORS
      //const = this value cannot be changes - it is constant
      //logo is the variable name we have given
      let logo: Locator = page.getByAltText('Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.')
      await expect(logo).toBeVisible()


      /* ---------- getByText ------------ */


      //getByText will return a LOCATOR 
      //const text:Locator = page.getByText('PMP Practice') //it's not returing a promise - so we didn't use "await"
      //await expect(text).toBeVisible()

      //combine this to single statement 
      await expect(page.getByText('PMP Practice')).toBeVisible()

      //its case sensitive
      //but, if we want to do ignore CASE sensitive
      //i is representing - (i) - case insensitive
      await expect(page.getByText(/PMP\s+Practice/i)).toBeVisible()


      /* -------------getByRole ---------*/


      //exact: true forces the match to be the whole name, not just a substring — so only the actual "Tips" link matches, not "Tooltips".
      await page.getByRole('link', { name: 'Tips', exact: true }).click()
      await expect(page.getByRole('heading', { name: 'Test Automation Tips and Tricks' })).toBeVisible()


      //navigate to Register page to PRACTICE labels
      await page.getByText('Test Cases').click()
      await page.getByText('Register Test Cases').click()
      await page.getByRole('link', { name: 'page' }).click()
      await expect(page.getByText('Test Register page for Automation Testing Practice')).toBeVisible()


      /* -------------- getByLabel -----------*/


      //use fill() method to give inputs in input box
      await page.getByLabel('Username').fill('Tamizh')
      await page.getByLabel('Password', { exact: true }).fill('tamizh@123')
      await page.getByLabel('Confirm Password').fill('tamizh@123')


      /* -------------- getByPlaceholder -----------*/


      //best for inputs which is not having label, but having placeholder Attribute in DOM
      let logo2: Locator = page.getByAltText('Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.')
      await expect(logo2).toBeVisible()
      await logo2.click()
      await page.getByPlaceholder('Search an example...').fill('API testing')


      /* ------- getByTitle -----*/


      // let title:Locator = page.getByTitle('Postman API Testing', {exact:true})
      // await expect(title).toBeVisible()

      //combine this 2 lines 
      await expect(page.getByTitle('Postman API Testing', { exact: true })).toHaveText('Postman API Testing')


      /* ------- getByTestId -----*/


      //use only when the "data-testId" is present in the element in DOM
      await expect(page.getByTestId('build-version')).toHaveText('Version: e64cd80e | Copyright Expand Testing 2026')

})