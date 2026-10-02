import {test, expect, Locator} from "@playwright/test"

test('xpathAxes Practice', async ({page})=>{

    //1. Self Axes --> Just use --> /self::tagName
    await page.goto('https://www.w3schools.com/html/html_tables.asp')
    const countryName : Locator = page.locator("//td[text()='Germany']/self::td")
    await expect(countryName).toHaveText('Germany')


    //2. parent Axes - Get the <tr> of "Germany" cell
    const parentRow : Locator = page.locator("//td[text()='Germany']/parent::tr")
    await expect(parentRow).toContainText('Maria Anders')


    //3. child Axes 
    const childAxes : Locator = page.locator("//table[@id='customers']//tr[3]/child::td")
    await expect(childAxes).toHaveCount(3)


    //4. Ancestor
    const ancestorAxes : Locator = page.locator("//td[text()='Mexico']/ancestor::table")
    await expect(ancestorAxes).toHaveAttribute('id', 'customers')


    //5. Descendant
    const descendantAxes : Locator = page.locator("//table[@id= 'customers']/descendant::td")
    expect(descendantAxes).toHaveCount(18)


    //6. following Axes
    const followingAxes : Locator = page.locator("//td[text()='Mexico']/following::td[1]")
    expect(followingAxes).toHaveText('Ernst Handel')


    //7. following-sibling
    const siblingAxes : Locator = page.locator("//td[text()='Mexico']/following-sibling::td")
    await expect(siblingAxes).toHaveCount(0)

    //another example
    const secsiblingAxes : Locator = page.locator("//td[text()='Alfreds Futterkiste']/following-sibling::td")
    await expect(secsiblingAxes).toHaveCount(2)    


    //8. preceding
    const presedingAxes : Locator = page.locator("//td[text()='Germany']/preceding::td")
    expect(presedingAxes).toHaveCount(2)


    //9. Preceding-sibling
    const precedingSiblingAxes : Locator = page.locator("//td[text()='Mexico']/preceding-sibling::td")
    await expect(precedingSiblingAxes).toHaveCount(2)
    await expect(precedingSiblingAxes.nth(0)).toHaveText('Centro comercial Moctezuma')
     await expect(precedingSiblingAxes.nth(1)).toHaveText('Francisco Chang')
    
})


