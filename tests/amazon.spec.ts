import { test, expect } from '@playwright/test'

test('Count visible Amazon navigation links', async ({ page }) => {

    await page.goto('https://www.amazon.in')

    // Locate navigation links only
    const allLinks = page.locator("//div[@class='nav-sprite']//a[contains(@class,'nav-a  ')]")

    // Count all matching links
    const totalCount = await allLinks.count()

    // Filter only visible links
    const visibleLinks = allLinks.filter({
        visible: true
    })

    // Count visible links
    const visibleCount = await visibleLinks.count()

    console.log('Total links:', totalCount)
    console.log('Visible links:', visibleCount)

    // Print visible link names
    for (let i = 0; i < visibleCount; i++) {
        console.log(await visibleLinks.nth(i).innerText())
    }

})