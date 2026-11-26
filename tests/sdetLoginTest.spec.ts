import { test, expect } from '@playwright/test';
import SdetLogin from '../pages/sdetLogin';
import HomePage from '../pages/homePage';
import cartPage from '../pages/addToCart'

test('sdet login practice', async ({ page }) => {

    // Create Login Page object
    const login = new SdetLogin(page);

    // Open application and login
    await login.launchUrl();
    await login.sdetLogin('pavanol', 'test@123');

    // Create Home Page object
    const home = new HomePage(page);

    // Verify product count
    await home.productListMethod(9);

    await home.chooseProduct('Nexus 6');
    await page.waitForTimeout(2000)

    //create homepageObject
    const cartPg = new cartPage(page)

    await cartPg.addToCart();
});