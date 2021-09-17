import { Page } from "@playwright/test";
export default class Productpage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    public get eleAddTocart(){
        return this.page.$('button[name="add-to-cart-sauce-labs-backpack"]')
    }
    public async clickAddToCartBtn(){
        const ele = await this.eleAddTocart;
        await ele?.click();

}
}