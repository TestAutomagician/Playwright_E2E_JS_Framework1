
const { BasePage } = require('./BasePage');

class AboutUsPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
        this.title = this.page.locator('.aboutusTitle');
        this.description = this.page.locator('.about_text');
        this.coursesOffered = this.page.locator('.coursesOffered');
        this.studentcounter = this.page.locator('.studentCounter');
        this.teachersCounter = this.page.locator('.teachersCounter');
        this.countriesCounter = this.page.locator('.countriesCounter');
    }
    async getTitle() {
        return await this.getText(this.title);
    }
    async navigateToAboutUs(url) {
        await this.navigate(url);
    }

    async getCourseOffered() {
        return await this.getText(this.coursesOffered);
    }
    async getStudentCount() {
        return await this.getText(this.studentcounter);
    }
    async getTeacherCount() {
        return await this.getText(this.teachersCounter);
    }
}
module.exports = { AboutUsPage };

