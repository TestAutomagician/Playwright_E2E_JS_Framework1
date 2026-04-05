import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage.js';


export default class EnrollPage extends BasePage {
    constructor(page) {
        super(page);
        this.title = this.page.locator('.enrollTitle');
        this.nameInput = this.page.locator('#name');
        this.emailInput = this.page.locator('#email');
        this.phoneInput = this.page.locator('#phone');
        this.courseName = this.page.locator('#course');
        this.submitBtn = this.page.locator('.submitBtn');
    }

    async fillForm(name, email, phone, course) {
        await this.type(this.nameInput, name);
        await this.type(this.emailInput, email);
        await this.type(this.phoneInput, phone);
        await this.type(this.courseName, course);
        await this.click(this.submitBtn);
    }
}