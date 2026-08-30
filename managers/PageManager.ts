import {Page} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.ts'

export class PageManager {

  readonly loginPage:LoginPage;

  constructor(private readonly page:Page){
    this.loginPage = new LoginPage(this.page)
  }
  
}