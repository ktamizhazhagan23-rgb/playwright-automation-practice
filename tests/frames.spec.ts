import { test, expect } from "@playwright/test"

test('iFrames Practice', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total number of iFrames present in web page
    const frame = page.frames()
    console.log("Count of the frame: ", frame.length)

    //Approach 1 - using page.frame() --> MUST use IF condition
    const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1' })
    if (frame1) {
        await frame1.fill("[name='mytext1']", "hello")
    }
    else {
        console.log("frame Not Found")
    }

    //Approach 2 - Using Frame.locator()
    const frame2 = await page.frameLocator("[src='frame_2.html']").locator("[name='mytext2']").fill('Tamizh')
    // await frame2.fill('tamizh')
    // await page.waitForTimeout(5000)

})
//Approach 3 - Handle inner/Child Element
test.only('handle Inner/Child iFrame', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Approach 3 - frame inside a frame (Google Form inside frame_3.html)
    await page.frameLocator("[src='frame_3.html']")
        .frameLocator("iframe")
        .locator("[class='AB7Lab Id5V1']")
        .nth(1)
        .click()

    await page.waitForTimeout(5000)
})







