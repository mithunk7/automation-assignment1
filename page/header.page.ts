import { Page } from "@playwright/test";
export default class Headerpage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get elecart(){
        return this.page.$('a.shopping_cart_link')
    }
    public async clickCartBtn(){
        const ele = await this.elecart;
        await ele?.click();
}
public get elecomplete(){
    return this.page.$(".complete-header")
}
public async completenote(){
    const ele = await this.elecart;
    await ele?.textContent();
}

}