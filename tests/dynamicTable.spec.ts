import { test, expect, Locator } from "@playwright/test"

test('Dynamic table handling Practice', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table')

  let dynamictable: Locator = await page.locator('.table-responsive')
  await expect(dynamictable).toBeVisible()

  //get all the data fromm the table
  let allData = page.locator(".table-responsive tr td")

  //get the target element
  let targetElement = dynamictable.getByText('Chrome')

  //print all the data from the dynamic table
  console.log("AllDataFromTable: ", await allData.allInnerTexts())

  //print the target element from the dynamic table
  console.log("Target Element: ", await targetElement.innerText())

  //Capture all rows
  let allRows = page.locator(".table-responsive tr")
  console.log("print all rows: ", await allRows.allInnerTexts())

  const allRowsText = await page.locator('.table-responsive tr').all()

  let cpuLoad = ''
  for (let row of allRowsText.slice(1)) {
    const processName = await row.locator("td").nth(0).innerText()
    if (processName === "Chrome") {
      cpuLoad = await row.locator('td:has-text("%")').innerText()
      console.log("Printing CPU % for Chrome:", await row.locator('td:has-text("%")').innerText())
      break
    }
  }

  //compare the CPU % from the dynamic table
  let chromeCpu: String = await page.locator('#chrome-cpu').innerText()
  console.log("chorome CPU load from yellow Box:", chromeCpu)

  if (chromeCpu.includes(cpuLoad)) {
    expect(chromeCpu).toContain(cpuLoad)
    console.log("passed CPU Load comparision")
  }
})