import { test, expect } from '@playwright/test';
const { AboutUsPage } = require('../PageObjectModel/aboutus');

test('VE-2322 Verify Title of Page', async ({ page }) => {
    let aboutusPage = new AboutUsPage(page);
    await aboutusPage.navigateToAboutUs("/about.html");
    let title = await aboutusPage.getTitle();
    expect(title).toBe('About Us');


});
test('VE-2323 Verify About Us Page Content  ', async ({ page }) => {


});  