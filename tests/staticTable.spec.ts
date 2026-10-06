import { test, expect, Locator } from "@playwright/test"

test('Static web Table practices', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //valildate table is present or not
    let webTable: Locator = page.locator("[name='BookTable']")

    //1. Count number of rown in a table including HEADER
    //Approach 1 --> Without find count - do assertion
    let rows: Locator = page.locator("[name='BookTable'] tbody tr")
    await expect(rows).toHaveCount(7)

    //Approach 2 --> find the count and do assertion
    const ApproachTwoRow: Locator = page.locator("[name='BookTable'] tbody tr")
    let rowCount: number = await ApproachTwoRow.count()
    console.log("Row Count in the Table: ", rowCount)


    //2. Count number of Header/Column 
    //Approach 1 --> Without find count - do assertion
    let columns: Locator = page.locator("[name='BookTable'] tbody tr td")
    await expect(columns).toHaveCount(24)

    //Approach 2 --> find the count and do assertion and implimention chaning of locators
    let ApproachTwoColumn: Locator = rows.locator("td")
    let columnCount: number = await ApproachTwoColumn.count()
    console.log(columnCount)


    //3. Read all data from Row 3
    let thirdRowCells: Locator = rows.nth(3).locator("td")
    let rowThreeText = await thirdRowCells.allInnerTexts()
    console.log(rowThreeText)
    expect(thirdRowCells).toHaveText(['Learn JS', 'Animesh', 'Javascript', '300'])

    //and capture all the texts
    let allText: Locator = page.locator("[name='BookTable'] tbody tr td")
    let allInnerTextPrint = await allText.allInnerTexts()
    console.log("Printing all text from the table: ", allInnerTextPrint)

    //and do some assertions on these text
    expect(allText).toHaveCount(24)

    //and print using for loop
    for (let allData of allInnerTextPrint) {
        console.log("Printing all dats from the table using for Loop: ", allData)
    }


    //4. Read all the data from the table(except header)
    //all() will change from Locator to array for locator
    console.log("Printing all datas EXCEPT Header:")
    for (let allData of allInnerTextPrint.slice(1)) {
        console.log(allData)
    }


    //5. print book name - when the author name is Mukesh
    const rowsArray: Locator[] = await rows.all()
    let mukeshBook: String[] = []
    for (let allData of rowsArray.slice(1)) {
        const cells = await allData.locator("td").allInnerTexts()
        const author = cells[1]
        const book = cells[0]

        if (author == 'Mukesh') {
            console.log(author, book)
            //store the book names whichis written by mukesh
            mukeshBook.push(book)

        }
    }
    console.log("MukeshBooks: ", mukeshBook)

    //and do assertion - for count - tohavelength
    expect(mukeshBook).toHaveLength(2)


    //6. calculate total price of all books - parseInt() - text to number format
    let totalPrice: number = 0
    for (let allData of rowsArray.slice(1)) {
        const cells = await allData.locator("td").allInnerTexts()
        const price = cells[3]

        totalPrice = totalPrice + parseInt(price)
    }
    console.log(totalPrice)
})