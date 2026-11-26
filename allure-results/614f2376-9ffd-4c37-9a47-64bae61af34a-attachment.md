# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.ts >> amazon title
- Location: tests\amazon.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 14
Received: {"_apiName": "Locator", "_frame": {"_guid": "frame@6aac4d507fd07f08cc227179e244a6fe", "_type": "Frame"}, "_selector": "//div[@class='nav-sprite']//a[@class='nav-a  '] >> visible=true", Symbol(nodejs.util.inspect.custom): [Function anonymous]}
```

# Test source

```ts
  1 | import {test, expect, Locator} from "@playwright/test"
  2 | 
  3 | test ('amazon title', async ({page})=>{
  4 | 
  5 |     await page.goto('https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_6n3yaqgj6u_e&adgrpid=1320515074809959&hvadid=82532537453543&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=154953&hvtargid=kwd-82533072414765:loc-90&hydadcr=5624_2537609&mcid=f60f75b9d1d23931b3735ecca3230f63&msclkid=fabc5d67ae21100e53d23663878ae8b7')
  6 |     const list = await page.locator("//div[@class='nav-sprite']//a[@class='nav-a  ']")
  7 |     const visibleVariable = list.filter({visible:true})
> 8 |     expect(visibleVariable).toBe(14)
    |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  9 | })
```