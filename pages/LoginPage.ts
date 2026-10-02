import {Page, Locator} from '@playwright/test'

export class LoginPage{

    private readonly userName:Locator;
    private readonly password:Locator;
    private readonly loginButton:Locator;
    private readonly langaugeSelect:Locator;
    private readonly errorMessage:Locator;

    constructor(private readonly page:Page){
        this.userName = this.page.locator('#loginInput');
        this.password = this.page.locator('#passwordInput');
        this.loginButton = this.page.getByRole('button',{name:'Log in'});
        this.langaugeSelect= this.page.locator('#loginLocaleSelect');
        this.errorMessage =  this.page.getByText('Invalid credentials');
        
    }

    async open(): Promise<void> {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
   
}

async selectLanguage(languageName:string):Promise<void>{
     await this.langaugeSelect.waitFor({ state: 'visible' });
    await this.langaugeSelect.selectOption(languageName);
     await this.page.waitForTimeout(2000);
  
}

async login(usernameInput: string, passwordInput: string): Promise<void> {

   await this.userName.fill(usernameInput);
    await this.password.fill(passwordInput);  
    await this.loginButton.click();

}

 async getErrorMessage(): Promise<string | null>{
    await this.errorMessage.waitFor({state:'visible'});
 return await this.errorMessage.textContent() ?? '';
 }


}