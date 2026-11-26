import {test, expect} from "@playwright/test"

const loginTestData :string[][] = [
["laura.taylor1234@example.com ", " test123", "valid "],
["laura.invalid@example.com ", " test123", "valid "],
["laura.taylor1234@example.com ", " invalid123", "valid "]
]

for (const [email, Password, validity] of loginTestData)
{
test(`params practice ${email} and ${Password}`, async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/login')
    await page.locator('#Email').fill('laura.taylor1234@example.com')
    await page.locator('#Password').fill('test123')
    await page.locator("[value='Log in']").click()
    await page.waitForTimeout(3000)
    const logout = await page.locator('a[href="/logout"]')
    await expect(logout).toBeVisible()
})
}
