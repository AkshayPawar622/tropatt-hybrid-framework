# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\practice.spec.ts >> add product to cart
- Location: tests\ui\practice.spec.ts:20:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.inventory_item_description').filter({ has: locator('.shopping_cart_link') })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import path from 'node:path';
  3  | test.beforeEach(async({page})=>{
  4  |      await page.goto('https://www.saucedemo.com/');
  5  | });
  6  | 
  7  | test('login and list the products',async({page})=>{
  8  |       await page.getByPlaceholder('username').fill('standard_user')
  9  |       await page.getByPlaceholder('password').fill('secret_sauce')
  10 |       await page.getByRole('button',{name: 'Login'}).click();
  11 |        const productstitile= page.getByText('Products');
  12 |         await productstitile.waitFor({state:'visible'});
  13 |          await page.context().storageState({path:'./auth/auth.json'});
  14 |       await expect(productstitile).toHaveText(/Products/i);
  15 | })
  16 | 
  17 | 
  18 | test.use({storageState :'./auth/auth.json'});
  19 | 
  20 | test.only('add product to cart',async({page})=>{
  21 |  await page.locator('.inventory_item_description')
  22 |             .filter({has:(page.locator('.shopping_cart_link'))})
> 23 |             .click();
     |              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |   await page.locator('.shopping_cart_link').click();
  25 |    const qnty =page.locator('.cart_quantity')
  26 |    const item =page.locator('.inventory_item_name');
  27 |     await expect(qnty).toHaveText('1');
  28 |     await expect (item).toContainText('Sauce Labs Backpack')          
  29 | 
  30 | })
  31 | 
```