const { LoginPage } = require("./test9");

class HomePage {
    constructor() {
        this.url = 'https://www.saucedemo.com/';

    }

    goToURL() {
        console.log(`Navigating to ${this.url}`);
    }
}

let homePage = new HomePage();
let loginPage = new LoginPage();
homePage.goToURL();
loginPage.login('myUsername', 'myPassword');
loginPage.demo();
console.log(loginPage.username);
