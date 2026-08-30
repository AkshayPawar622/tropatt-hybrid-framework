# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\practice.spec.ts >> login and list the products
- Location: tests\ui\practice.spec.ts:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Products"
Received: {"_apiName": "Locator", "_frame": {"_guid": "frame@177b1b0f79b45ac41ce4a7a43dd57e40", "_type": "Frame"}, "_selector": "internal:text=\"Products\"i", Symbol(nodejs.util.inspect.custom): [Function anonymous]}
```

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByText('Products') to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: secret_sauce
      - textbox "Password" [ref=e15]
      - heading [level=3] [ref=e19]:
        - button [ref=e20] [cursor=pointer]
        - text: "Epic sadface: Password is required"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test.beforeEach(async({page})=>{
  3  |      await page.goto('https://www.saucedemo.com/');
  4  | });
  5  | 
  6  | test('login and list the products',async({page})=>{
  7  |       await page.getByPlaceholder('username').fill('standard_user')
  8  |       await page.getByPlaceholder('username').fill('secret_sauce')
  9  |       await page.getByRole('button',{name: 'Login'}).click();
  10 |        const productstitile= page.getByText('Products');
> 11 |          productstitile.waitFor({state:'visible'});
     |                         ^ Error: locator.waitFor: Test ended.
  12 |          await page.context().storageState({path:'./auth/auth.json'});
  13 |          expect(productstitile).toBe('Products');
  14 | })
```