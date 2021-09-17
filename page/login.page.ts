import { Page} from "@playwright/test";

export default class loginPage{

     private page:Page;
     constructor(page:Page){
         this.page=page;
     }

     public get eleEmailTextField(){
         return this.page.$('input[name="user-name"]')
     }
     public get elePassTextField(){
        return this.page.$('input[name="password"]')
    }
    public get eleLoginBtn(){
        return this.page.$('input[name="login-button"]')
    }
    public async enterUserName(name:string){
        const ele = await this.eleEmailTextField;
        await ele?.fill(name);
    }
    public async enterUserPassword(pass:string){
        const ele = await this.elePassTextField;
        await ele?.fill(pass);
    }  
    public async clickLoginBtn(){
        const ele = await this.eleLoginBtn;
        await ele?.click();
          
    }
    public async logindirect(username:string,pass:string){
        await this.enterUserName(username);
        await this.enterUserPassword(pass);
        await this.clickLoginBtn();


    }

   } 
