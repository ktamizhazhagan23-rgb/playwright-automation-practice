# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sdetLoginTest.spec.ts >> sdet login practice
- Location: tests\sdetLoginTest.spec.ts:6:5

# Error details

```
TypeError: cartPg.addTocart is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - text:             
  - navigation [ref=f2e2]:
    - generic [ref=f2e3]:
      - link "PRODUCT STORE" [ref=f2e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f2e7]:
        - listitem [ref=f2e8]:
          - link "Home (current)" [ref=f2e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f2e10]: (current)
        - listitem [ref=f2e11]:
          - link "Contact" [ref=f2e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e13]:
          - link "About us" [ref=f2e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e15]:
          - link "Cart" [ref=f2e16] [cursor=pointer]:
            - /url: cart.html
        - listitem
        - listitem [ref=f2e17]:
          - link "Log out" [ref=f2e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e19]:
          - link "Welcome pavanol" [ref=f2e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f2e22]:
    - generic [ref=f2e25]:
      - list [ref=f2e26]:
        - listitem [ref=f2e27] [cursor=pointer]
        - listitem [ref=f2e28] [cursor=pointer]
        - listitem [ref=f2e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=f2e32]:
      - heading "Nexus 6" [level=2] [ref=f2e33]
      - separator [ref=f2e34]
      - heading "$650 *includes tax" [level=3] [ref=f2e35]
      - separator [ref=f2e36]
      - generic [ref=f2e37]:
        - list:
          - listitem
        - generic [ref=f2e39]:
          - strong [ref=f2e40]: Product description
          - paragraph [ref=f2e41]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
      - separator [ref=f2e42]
      - link "Add to cart" [ref=f2e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=f2e47]:
    - generic [ref=f2e50]:
      - heading "About Us" [level=4] [ref=f2e51]
      - paragraph [ref=f2e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f2e55]:
      - heading "Get in Touch" [level=4] [ref=f2e56]
      - paragraph [ref=f2e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=f2e58]: "Phone: +440 123456"
      - paragraph [ref=f2e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f2e63]
  - contentinfo [ref=f2e65]:
    - paragraph [ref=f2e66]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import SdetLogin from '../pages/sdetLogin';
  3  | import HomePage from '../pages/homePage';
  4  | import cartPage from '../pages/addToCart'
  5  | 
  6  | test('sdet login practice', async ({ page }) => {
  7  | 
  8  |     // Create Login Page object
  9  |     const login = new SdetLogin(page);
  10 | 
  11 |     // Open application and login
  12 |     await login.launchUrl();
  13 |     await login.sdetLogin('pavanol', 'test@123');
  14 | 
  15 |     // Create Home Page object
  16 |     const home = new HomePage(page);
  17 | 
  18 |     // Verify product count
  19 |     await home.productListMethod(9);
  20 | 
  21 |     await home.chooseProduct('Nexus 6');
  22 |     await page.waitForTimeout(2000)
  23 | 
  24 |     //create homepageObject
  25 |     const cartPg = new cartPage(page)
  26 | 
> 27 |     cartPg.addTocart();
     |            ^ TypeError: cartPg.addTocart is not a function
  28 | 
  29 | });
```