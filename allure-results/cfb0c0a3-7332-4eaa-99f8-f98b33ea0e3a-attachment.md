# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\practice.spec.ts >> table
- Location: tests\ui\practice.spec.ts:52:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeEach(async ({ page }) => {
  4  |   await page.goto('https://playwrightlab.github.io/?utm_source=chatgpt.com');
  5  | });
  6  | 
  7  | // test('login and list the products', async ({ page }) => {
  8  | //   await page.getByPlaceholder('username').fill('standard_user');
  9  | //   await page.getByPlaceholder('password').fill('secret_sauce');
  10 | //   await page.getByRole('button', { name: 'Login' }).click();
  11 | 
  12 | //   const productsTitle = page.getByText('Products');
  13 | 
  14 | //   await expect(productsTitle).toBeVisible();
  15 | 
  16 | //   await page.context().storageState({
  17 | //     path: './auth/auth.json'
  18 | //   });
  19 | 
  20 | //   await expect(productsTitle).toHaveText(/Products/i);
  21 | // });
  22 | 
  23 | // test.describe('Authenticated tests', () => {
  24 | 
  25 | // //   test.use({
  26 | // //     storageState: './auth/auth.json'
  27 | // //   });
  28 | 
  29 | //   test('add product to cart', async ({ page }) => {
  30 | //   await page.getByPlaceholder('username').fill('standard_user');
  31 | //   await page.getByPlaceholder('password').fill('secret_sauce');
  32 | //   await page.getByRole('button', { name: 'Login' }).click();
  33 | 
  34 | //     await page.locator('.inventory_item')
  35 | //       .filter({
  36 | //         hasText: 'Sauce Labs Backpack'
  37 | //       })
  38 | //       .getByRole('button', { name: /add to cart/i })
  39 | //       .click();
  40 | 
  41 | //     await page.locator('.shopping_cart_link').click();
  42 | 
  43 | //     const quantity = page.locator('.cart_quantity');
  44 | //     const item = page.locator('.inventory_item_name');
  45 |     
  46 | //     await expect(quantity).toHaveText('1');
  47 | //     await expect(item).toContainText('Sauce Labs Backpack');
  48 | //   });
  49 | 
  50 | // });
  51 | 
  52 | test('table',async({page})=>{
  53 |    const row = page.locator('#tableBody tr').filter({hasText:'Alice Johnson'})
  54 |    const cell = row.locator('td');
  55 | await cell.filter({has: page.getByRole('button',{name:'Edit'})}).click();
> 56 | await page.waitForTimeout(500000)
     |            ^ Error: page.waitForTimeout: Test ended.
  57 | })
  58 | 
  59 | 
```