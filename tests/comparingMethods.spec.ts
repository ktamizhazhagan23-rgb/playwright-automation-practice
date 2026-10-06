import { test, expect, Locator } from "@playwright/test"

test('comparing the methods', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')

    //innerText Vs textContent
    let innerTextLoc: Locator = page.locator('.product-title')

    //count
    const count = await innerTextLoc.count()
    console.log(count)

    //print using innerText and textContent
    console.log(await innerTextLoc.nth(2).innerText())
    console.log(await innerTextLoc.nth(2).textContent())

    //if we use textContent - it will print with some spaces as well - use trim() method
    console.log((await innerTextLoc.nth(2).textContent())?.trim())

    //print using for loop -- innerText 
    for (let i = 0; i < count; i++) {
        console.log("inerText - List of text print using traditional for loop: ", await innerTextLoc.nth(i).innerText())
    }

    //print using for loop --  textContent
    for (let i = 0; i < count; i++) {
        const content = (await innerTextLoc.nth(i).textContent())?.trim()
        console.log("textContent - List of text print using traditional for loop: ", content)
    }

    //print using allInnerText 
    console.log("All Inner text Print: ", await innerTextLoc.allInnerTexts())

    //print using allTextContent
    let alltextCont: string[] = (await innerTextLoc.allTextContents()).map(text => text.trim())
    console.log("All TEXT CONTENT Print: ", alltextCont)

    //3. all() -- convert Locator to Locator[] - to use "for of" and "for in" loop
    let locArray: Locator[] = await innerTextLoc.all()
    console.log("testLoc Array print", locArray)

    //print one innerText
    console.log("just print one innerText: ", await locArray[1].innerText())

    //for of - loop condition
    for (let allLocator of locArray) {
        console.log("print all loc text: ", await allLocator.innerText())
    }

    //for in - loop condition - "for in" --> will be acting as a Index - first we need to extract the index, from index , extract the loctors
    for (let i in locArray) {
        console.log(await locArray[i].innerText())
    }
})