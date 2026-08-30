import {Page, Locator} from '@playwright/test'

export class LoginPage{

    private readonly userName:Locator;
    private readonly password:Locator;
    private readonly loginButton:Locator;
    private readonly langaugeSelect:Locator;

    constructor(private readonly page:Page){
        this.userName = this.page.locator('#loginInput');
        this.password = this.page.locator('#passwordInput');
        this.loginButton = this.page.getByRole('button',{name:'Log in'});
        this.langaugeSelect= this.page.locator('#loginLocaleSelect');
        
    }

    async open(): Promise<void> {
    await this.page.goto('/');
}

async selectLanguage(languageName:string):Promise<void>{
    await this.langaugeSelect.selectOption(languageName);
}
 async login(usernameInput:string,passwordInput:string):Promise<void>{
    
    await this.userName.fill(usernameInput);
    await this.password.fill(passwordInput);
    await this.loginButton.click();

 }


}