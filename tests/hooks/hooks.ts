import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from 'playwright';

setDefaultTimeout(60000);

let browser: Browser;
let context: BrowserContext;

Before(async function () {

    console.log('Launching Browser...');

    browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext();

    this.page = await context.newPage();

    console.log('Browser Started');
});

After(async function () {

    if (browser) {
        await browser.close();
        console.log('Browser Closed');
    }
});