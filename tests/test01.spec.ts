import {test} from '@playwright/test'   
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.Methods'
    test('Login', async({page})=>{
        const commonPageMethods= new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)


        await commonPageMethods.navigateToTheApplication()

        
        await loginPageMethods.insertUserName('standard_user')
        await loginPageMethods.insertPassword('secret_sauce')

        await loginPageMethods.clickLoginButton()

        await page.waitForTimeout(5000)

    })