import { Page } from "@playwright/test";
export default class Yourinfopage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    public get eleFirstName(){
        return this.page.$("input[name='firstName']")
    }
    public get eleLastName(){
        return this.page.$("input[name='lastName']")
    }
    public get elePostalCode(){
        return this.page.$("input[name='postalCode']")
    
    }
    public get eleContinue(){
        return this.page.$("input[name='continue']")
    
    }
    public async enterFirstName(firstname:string){
        const ele = await this.eleFirstName;
        await ele?.fill(firstname);
    }
    public async enterLastName(lastname:string){
        const ele = await this.eleLastName;
        await ele?.fill(lastname);
    }
    public async enterPostalCode(num:string){
        const ele = await this.elePostalCode;
        await ele?.fill(num);
    }
    public async clickContinueBtn(){
        const ele = await this.eleContinue;
        await ele?.click();
}
}