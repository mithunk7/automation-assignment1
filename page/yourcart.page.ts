import { Page } from "@playwright/test";
export default class Yourcartpage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    public get elecheckout(){
        return this.page.$("button[name='checkout']")
    }
    public async clickCheckOutBtn(){
        const ele = await this.elecheckout;
        await ele?.click();
}
}