import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObjectModel/homePage.js';

let homePage;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    homePage = new HomePage(page);
    await homePage.navigateToHomePage("/index.html");
});



test('Verify Title of Page', async ({ page }) => {
    expect(await homePage.getTitle()).toBe('');
});

test('Verify Learn More Button functionality', async ({ page }) => {
    await homePage.clickLearnMore();
    expect(await homePage.getTitle()).toBe('About us');
});
test('Verify Courses Button functionality', async ({ page }) => {
    await homePage.clickCourses();
    expect(await homePage.getTitle()).toBe('Courses');
});

test('Verify Enroll Button functionality', async ({ page }) => {
    await homePage.clickEnroll();
    expect(await homePage.getTitle()).toBe('Enroll Form');

});