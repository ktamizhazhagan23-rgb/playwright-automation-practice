import { test, expect, Locator } from '@playwright/test'

test('XPath Locators Practice', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')

    //1. Absolute Xpath for Logo
    //const logo: Locator = page.locator('/html/body/div[4]/div[1]/div[1]/div[1]/a/img')


    //2. Releative Xpath for Logo
    let logo2: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
    await expect(logo2).toBeVisible()


    //3. XPath using contains Method
    await page.locator("(//a[contains(text(),'Computers')])[1]").click()

    //just using this locator to navigate to Validation page
    await page.getByAltText('Picture for category Desktops').click()

    //actual contains method practice
    const products: Locator = page.locator("//h2/a[contains(text(), 'computer')]")
    const productCount: number = await products.count()
    console.log(productCount)
    expect(productCount).toBeGreaterThan(0)

    //textContent method to extract text from an element
    //console.log(await products.textContent())   //Error: strict mode violation - since it will return multiple elements in DOM

    //We can use some methods to avaid this Strict mode violation
    console.log('print first element textContent', await products.first().textContent())
    console.log('print last element textContent', await products.last().textContent())
    console.log('print nth element textContent', await products.nth(2).textContent())

    //use looping statement to iterate all the products
    //products.allTextCOntent - This will extract all the textContent in this product
    let productTitles: string[] = await products.allTextContents()

    for (let pt of productTitles) {
        console.log(pt)
    }


    //4. XPath with "start-with" methood
    const buildingProduct: Locator = page.locator("//h2/a[starts-with(@href, '/build')]") //will return multiple elements
    const buildCount: number = await buildingProduct.count()
    expect(buildCount).toBeGreaterThan(0)


    //5. XPath with "text" method
    const registerlink: Locator = page.locator("//*[text()='Register']")
    await expect(registerlink).toBeVisible()
    await registerlink.click()


    //6. XPath with "last()" function
    const lastItem : Locator = page.locator("//div[@class='column follow-us']/ul/li[last()]")
    await expect(lastItem).toBeVisible()


    //7. XPath with "Position()" function
    const positionItem : Locator = page.locator("//div[@class='column follow-us']/ul/li[position()=4]")
    await expect(positionItem).toBeVisible()
})