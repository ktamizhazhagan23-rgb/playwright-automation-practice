# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practiceLogin.spec.ts >> Login practice to sausedemo page
- Location: tests\practiceLogin.spec.ts:9:5

# Error details

```
Error: BASE_URL is missing from .env
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | class LoginPage {
  4  | 
  5  |     readonly page: Page;
  6  |     readonly baseURL: string;
  7  | 
  8  |     constructor(page: Page) {
  9  |         this.page = page;
  10 |         const url = process.env.BASE_URL;
  11 | 
  12 | if (!url) {
> 13 |     throw new Error('BASE_URL is missing from .env');
     |           ^ Error: BASE_URL is missing from .env
  14 | }
  15 | 
  16 | this.baseURL = url;
  17 |         this.baseURL = process.env.BASE_URL ?? '';
  18 |     }
  19 | 
  20 |     async open(): Promise<void> {
  21 |         await this.page.goto(this.baseURL);
  22 |     }
  23 | }
  24 | 
  25 | export default LoginPage;
```