// import {test,expect} from '../../fixtures/testFixtures'
// import {environment} from '../../config/environment';

// test('Verify admin user login',async({pageManager,page})=>{
//      await pageManager.loginPage.open();
//      await pageManager.loginPage.selectLanguage(environment.language);
//     await pageManager.loginPage.login(environment.username,environment.password);

//     await expect(page).toHaveURL(/dashboard/i)

// }) 


let arr= [10,20,30,40]
let max = -Infinity;
let secondMax = -Infinity;

for (let num of arr) {

    if (num > max) {
        secondMax = max; 10
        max = num; 20
    }
    else if (num > secondMax && num < max) {
        secondMax = num;
    }
}

console.log(secondMax);