import {test,expect} from '../../fixtures/testFixtures'
import {environment} from '../../config/environment';


test('Verify admin user login @smoke',async({pageManager,page})=>{
     await pageManager.loginPage.open();
     await pageManager.loginPage.selectLanguage(environment.language);
    await pageManager.loginPage.login(environment.username,environment.password);
    await expect(page).toHaveURL(/dashboard/i)

}) 


test ('Login with invalid username @sanity @regression',async ({pageManager,page})=>{
    await pageManager.loginPage.open();
    await pageManager.loginPage.selectLanguage(environment.language);
    await pageManager.loginPage.login(environment.invalidUsername,environment.invalidPassword);
    const error = await pageManager.loginPage.getErrorMessage();
     expect(error).toContain('Invalid credentials')
})

