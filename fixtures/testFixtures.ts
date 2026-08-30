import {test as base,expect} from'@playwright/test';
import { PageManager } from '../managers/PageManager';



type MyFixture={

  pageManager:PageManager;

}

export const test = base.extend<MyFixture>({

    pageManager:async ({page},use)=>{
        await use(new PageManager(page));
    }
})

export {expect}