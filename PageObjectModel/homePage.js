
import { test, expect } from '@playwright/test';
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
        // this.logo = this.page.locator('.logo');
        this.learnMoreBtn = '(//*[@class="home_buttons"]//a)[1]';
        this.coursesBtn = '(//*[@class="home_buttons"]//a)[2]';
        this.enrollBtn = '//div[@class="featured_tag"]/a';
        // this.enrollBtn = thispage.locator('.blinkingText');

    }
    async navigateToHomePage(url) {
        await this.navigate(url);
    }
    async clickLearnMore() {
        await this.click(this.learnMoreBtn);
    }
    async clickEnroll() {
        await this.click(this.enrollBtn);
    }
    async getLogoText() {
        return await this.getText(this.logo);
    }

    async getTitle() {
        return await this.page.title();
    }
    async clickCourses() {
        await this.click(this.coursesBtn);
    }



}
module.exports = { HomePage };


