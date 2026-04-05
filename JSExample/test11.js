const { BasePage } = require('./base.js');
class DashBoardPage extends BasePage {
    constructor() {
        super();
        this.title = "Dashboard Page";
    }

}


let dashboardPage = new DashBoardPage();
dashboardPage.getTitle();
dashboardPage.click();
dashboardPage.type("Hello");
dashboardPage.wait();

//Exporting the DashboardPage class
module.exports = { DashBoardPage }; 
