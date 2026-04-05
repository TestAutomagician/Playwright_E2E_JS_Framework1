class BasePage {
    constructor() {
        this.title = "Base Page";
    }

    getTitle() {
        console.log(`Title of the page is: ${this.title}`);
    }
    click() {
        console.log(`Clicking on ${this.title}`);
    }
    type(text) {
        console.log(`Typing "${text}" on ${this.title}`);
    }
    wait() {
        console.log(`Waiting on ${this.title}`);
    }
}

module.exports = { BasePage };
