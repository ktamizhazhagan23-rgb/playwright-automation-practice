import { test, expect } from '@playwright/test'
import * as fs from 'fs'

const jsonPath = 'tests/test-data/params.json'
const loginData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

test.describe('Login practice', () => {
    for (const { email, password, validity } of loginData) {
        test(`login with email: ${email} and password: ${password}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/login')
            await page.locator('#Email').fill(email)
            await page.locator('#Password').fill(password)
            await page.locator("[value='Log in']").click()

            if (validity === 'valid') {
                await expect(page.locator('a[href="/logout"]')).toBeVisible()
            } else {
                await expect(page.getByText('Please enter a valid email address.')).toBeVisible()
            }
        })
    }
})





