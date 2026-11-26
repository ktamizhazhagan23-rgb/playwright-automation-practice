import { expect, Locator, Page } from "@playwright/test";

class homePage {

    readonly page: Page;
    readonly productList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productList = page.locator('.card-title');
    }

    async productListMethod(count: number) {

        // Verify the expected product count
        await expect(this.productList).toHaveCount(count);

        // Get all matching product elements
        const products = await this.productList.all();
        for (const product of products) {
            console.log(await product.innerText());
        }
    }

    async chooseProduct(productName : string)
    {
        const productNm = this.page.getByRole('link', {
        name: productName,
        exact: true
    });
        await productNm.click()
    }


}

export default homePage;