const { DashBoardPage } = require('./test11.js')


class CartPage extends DashBoardPage {
    constructor() {
        super();
        this.title = "Cart Page";
    }
    click() {
        console.log("Cart Page");

    }

    display() {
        this.click();
        super.click();
        console.log("Displaying Cart Page");
    }

}
let cartPage = new CartPage();
cartPage.getTitle();
cartPage.click();
cartPage.type("Hello");
cartPage.wait();
