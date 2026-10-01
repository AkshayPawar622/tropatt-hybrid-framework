import{test, expect} from '@playwright/test';
import { environment } from '../../config/environment';

test('login reuqest',async({request})=>{
  
   const response = await request.post(`${environment.baseURL}/api/v1/auth/login`,
    {data:
        {   'username' :environment.username,
            'password': environment.password
        }
    })

// console.log('Status:', response.status());
// console.log('URL:', response.url());
// console.log('Content-Type:', response.headers()['content-type']);
// console.log('Response:', await response.text());
     expect(response.ok()).toBeTruthy();
})