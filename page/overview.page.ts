import { Page } from "@playwright/test";
export default class Overview{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    public get eleFinishBtn(){
        return this.page.$("button[name='finish']");
    }
    public async clickFinishBtn(){
        const ele = await this.eleFinishBtn;
        await ele?.click();
}}