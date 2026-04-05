
const { BasePage } = require('./BasePage');

class AboutUsPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
        this.title = '.about_title';
        this.textContent = '//div[@class="about_text"]/p';

    }
    async getTitle() {
        return await this.getText(this.title);
    }
    async navigateToAboutUs(url) {
        await this.navigate(url);
    }
    async getPageTitle() {
        return await this.page.title();
    }
    async getTextContent() {
        return await this.getText(this.textContent);
    }

    //     async getCourseOffered() {
    //         return await this.getText(this.coursesOffered);
    //     }
    //     async getStudentCount() {
    //         return await this.getText(this.studentcounter);
    //     }
    //     async getTeacherCount() {
    //         return await this.getText(this.teachersCounter);
    //     }

}
module.exports = { AboutUsPage };

