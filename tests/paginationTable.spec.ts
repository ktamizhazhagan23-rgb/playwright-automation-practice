import { test, expect, Locator } from "@playwright/test"

test("Pagination table practice", async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table')

    let hasMorePage = true;

    //only a first table content printing
    const wholetable: Locator = await page.locator(".table")
    await expect(wholetable).toBeVisible()

    //only a first table content printing wih innerText Method
    const tabletexts = await wholetable.locator("tbody td")
    console.log("Printing all values from the table: ", await tabletexts.allInnerTexts())

    //condition to check, whether the next button is enabled in the pagination table
    const nextButton: Locator = await page.getByText("Next")
    await expect(nextButton).toBeEnabled()

    //declaration
    const nextLi = page.locator('#example_next')

    //click on next button
    while (hasMorePage) {
        const tabletexts = await wholetable.locator('tbody td').allInnerTexts()
        console.log("Printing all values from the table: ", tabletexts)

        const isDisabled = await nextLi.getAttribute('class')
        if (isDisabled?.includes('disabled')) {
            break
        }
        else {
            await nextButton.click()
        }
    }
})


test("filter and count the rows", async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table')

    const filterLoc = page.locator('.form-select')
    let rowCount = await filterLoc.selectOption({ label: '5' })

    //approach 1 - Using all() --> so validation using Length method
    let rows = await page.locator('#example tbody tr').all()
    expect(rows.length).toBe(5)

    //approach 2 - NOT Using all() --> so validation using "toHaveCOunt"
    let rows2 = await page.locator('#example tbody tr')
    await expect(rows2).toHaveCount(5)

    //print all the 5 rows
    console.log(await rows2.allInnerTexts())
})


test.only('Search for specific data in the pagination table', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table')

    let searchBox: Locator = page.locator("[type='search']")
    await searchBox.fill('John Doe')

    let rowsLoc = await page.locator('#example tbody tr').all()

    if ((await rowsLoc).length >= 1) {
        let matchFound = false;
        for (let row of rowsLoc) {
            let text = row.innerText()
            if ((await text).includes('John Doe')) {
                console.log("Targeted text is founf in the table:", text)
                matchFound = true
                break
            }
        }
    }
    else {
        console.log("Targeted text is NOT founf in the table")
    }
})
