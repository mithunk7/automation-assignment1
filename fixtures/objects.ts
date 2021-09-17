import loginPage from "../page/login.page";

import{Expect, test as basetest} from "@playwright/test";

const test = basetest.extend<{

    loginPage: loginPage;
}>({

    loginPage: async({page},use)=>{
        await use(new loginPage(page));
    }
})
export default test;
export const expect = test.expect;