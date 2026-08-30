import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwrightlab.github.io/?utm_source=chatgpt.com');
});

// test('login and list the products', async ({ page }) => {
//   await page.getByPlaceholder('username').fill('standard_user');
//   await page.getByPlaceholder('password').fill('secret_sauce');
//   await page.getByRole('button', { name: 'Login' }).click();

//   const productsTitle = page.getByText('Products');

//   await expect(productsTitle).toBeVisible();

//   await page.context().storageState({
//     path: './auth/auth.json'
//   });

//   await expect(productsTitle).toHaveText(/Products/i);
// });

// test.describe('Authenticated tests', () => {

// //   test.use({
// //     storageState: './auth/auth.json'
// //   });

//   test('add product to cart', async ({ page }) => {
//   await page.getByPlaceholder('username').fill('standard_user');
//   await page.getByPlaceholder('password').fill('secret_sauce');
//   await page.getByRole('button', { name: 'Login' }).click();

//     await page.locator('.inventory_item')
//       .filter({
//         hasText: 'Sauce Labs Backpack'
//       })
//       .getByRole('button', { name: /add to cart/i })
//       .click();

//     await page.locator('.shopping_cart_link').click();

//     const quantity = page.locator('.cart_quantity');
//     const item = page.locator('.inventory_item_name');
    
//     await expect(quantity).toHaveText('1');
//     await expect(item).toContainText('Sauce Labs Backpack');
//   });

// });

// test('table',async({page})=>{
//    const rows = page.locator('#tableBody tr');

// const count = await rows.count();

// expect(count).toBeGreaterThan(0);

// // Select a known row based on position/business condition
// const row = rows.nth(0);

// const name = await row.locator('td').nth(1).textContent();

// console.log(`Editing dynamically generated user: ${name}`);

// await row.getByRole('button', { name: 'Edit' }).click();
// })

test('find user across pages', async ({ page }) => {

    const userName = 'Mike Tyson';

    while (true) {

        // Find the row on the current page
        const row = page.locator('#tableBody tr')
            .filter({ hasText: userName });

        // Check whether user exists on current page
        if (await row.count() > 0) {

            // User found → click Edit
            await row.getByRole('button', { name: 'Edit' }).click();

            console.log(`User ${userName} found and edited`);

            break;
        }

        // User not found → check Next button
        const nextButton = page.locator('#pageNext');
        if (await nextButton.isDisabled()) {

            throw new Error(`User ${userName} not found`);

        }

        // Go to next page
        await nextButton.click();

        // Wait for table to update
        await page.waitForTimeout(500);
    }
});