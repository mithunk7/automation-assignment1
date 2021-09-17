import test, {Browser,BrowserContext,Page,chromium, expect  } from "@playwright/test";
import loginPage from "../page/login.page";
import url from "../utilities/url";
import * as data from "../../example_a/data/login.cred.json";
import Headerpage from "../page/header.page";
import Overview from "../page/overview.page";
import Productpage from "../page/product.page";
import Yourcartpage from "../page/yourcart.page";
import Yourinfopage from "../page/yourinfo.page";


test.describe("swag",()=>{
    let browser: Browser;
    let context: BrowserContext;
    let page : Page;
    //My Pages

    let login : loginPage;
    let header : Headerpage;
    let Overviewpage: Overview;
    let product: Productpage;
    let yourcart : Yourcartpage;
    let yourinfo : Yourinfopage;
    test.beforeAll(async()=>{
        browser =await chromium.launch({headless:false});
        context=await browser.newContext()
        page = await context.newPage();
        await page.goto(url.test);
       login = new loginPage(page);
       header= new Headerpage(page);
       Overviewpage= new Overview(page);
       product= new Productpage(page);
       yourcart= new Yourcartpage(page);
       yourinfo = new Yourinfopage(page); 
    })
    test("Login positive",async()=>{
        expect(page.url()).toBe("https://www.saucedemo.com/")
        const title = await page.title();
       expect(title).toBe("Swag Labs");
       await login.enterUserName(data.userid);
       await login.enterUserPassword(data.password);
       await login.clickLoginBtn();
     
    });
    test("swag E2E",async()=>{
        await login.logindirect(data.userid,data.password);
        expect(page.url()).toBe("https://www.saucedemo.com/inventory.html")
        const title = await page.title();
        expect(title).toBe("Swag Labs");
        await product.clickAddToCartBtn();

        await header.clickCartBtn();
        expect(page.url()).toBe("https://www.saucedemo.com/cart.html");
        await yourcart.clickCheckOutBtn();
        expect(page.url()).toBe("https://www.saucedemo.com/checkout-step-one.html");
        await yourinfo.enterFirstName(data.firstname);
        await yourinfo.enterLastName(data.lastname);
        await yourinfo.enterPostalCode(data.postcode);
        await yourinfo.clickContinueBtn();
        expect(page.url()).toBe("https://www.saucedemo.com/checkout-step-two.html")
        await Overviewpage.clickFinishBtn();
        expect(page.url()).toBe("https://www.saucedemo.com/checkout-complete.html")
        expect(header.completenote()).toContainText("THANK YOU FOR YOUR ORDER")
    })

})