// @ts-check
import { test, expect } from '@playwright/test';
import { before, beforeEach } from 'node:test';

test.beforeAll(async ({ }) => {
    console.log('Before all tests');
});
test.beforeEach(async ({ }) => {
    console.log('Before each test');
});
test.afterAll(async ({ }) => {
    console.log('After all tests');
});
test.afterEach(async ({ }) => {
    console.log('After each test');
});

test('Verify Radio button functionality @smoke @regression', async ({ page }) => {
    // const page = await browser.newPage();
    await page.goto('https://vivtechguru.com/practice.html');
    let radioBtn1 = page.locator('#flexRadioDefault1');
    await radioBtn1.click();
    let radioBtn2 = page.locator('#flexRadioDefault2');
    await radioBtn2.click();
    await expect(radioBtn1).not.toBeChecked();
    await expect(radioBtn2).toBeChecked();

});
test('Verify Checkbox functionality', async ({ page }) => {
    await page.goto('https://vivtechguru.com/practice.html');
    let checkboxBtn1 = page.locator('#flexCheck');
    await checkboxBtn1.click();
    let checkboxBtn2 = page.locator('#flexCheckChecked');
    await checkboxBtn2.click();
    await expect(checkboxBtn1).toBeChecked();
    await expect(checkboxBtn2).toBeChecked();

});

test('Verify select list functionality', async ({ page }) => {
    await page.goto('https://vivtechguru.com/practice.html');
    let selectList = page.locator('//select');
    await selectList.selectOption({ index: 2 });
    await expect(selectList).toContainText('Option 2');

});

test('Verify auto complete functionality', async ({ page }) => {
    await page.goto('https://vivtechguru.com/practice.html');
    let inputField = page.locator('.suggestion_input');
    await inputField.nth(0).fill('Ja');
    await page.waitForTimeout(2000);
    await page.locator('//*[@value="JavaScript"]').click();
    await page.waitForTimeout(2000);
    // await page.keyboard.press('ArrowDown');
    // await page.waitForTimeout(2000);
    // await page.keyboard.press('ArrowDown');
    // await page.waitForTimeout(2000);
    // await page.keyboard.press('ArrowDown');
    // await page.waitForTimeout(2000);
    // await page.keyboard.press('ArrowDown');
    // await page.waitForTimeout(2000);
    // await page.keyboard.press('ArrowDown');
    // await page.waitForTimeout(2000);

    await expect(inputField.nth(0)).toHaveValue('JavaScript');

});

test('Verify auto complete functionality1', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    let inputField = page.locator('#autocomplete');
    await inputField.fill('Ind');
    await page.waitForTimeout(2000);
    await page.locator('.ui-menu-item-wrapper').nth(1).click();
    await page.waitForTimeout(2000);
    await expect(inputField.nth(0)).toHaveValue('India');

});

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');


    try {


        await expect(page).toHaveTitle('Practice1');

    } catch (error) {
        await page.screenshot();
    }
    // Expect a title "to contain" a substring.

});


test('Verify Dialog handling', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


    await page.getByPlaceholder('Enter Your Name').fill('Pardeep');

    //get dialog message
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toContain('Hello Pardeep, Are you sure you want to confirm?');
        await dialog.accept();
    });

    await page.locator('[onclick="displayConfirm()"]').click();

});


test('Verify window handling functionality', async ({ page }) => {
    await page.goto('https://vivtechguru.com/practice.html');

    // Verify that a new window is opened
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('[onclick="openNewWindow()"]').click()
    ]);

    await newPage.getByPlaceholder('Enter your name').screenshot({ path: 'screenshot/newPage.png' });
    await page.screenshot({ path: 'screenshot/parentPage.png' });
    // Verify the URL of the new page
    await expect(newPage).toHaveTitle('Test Page');

});




test(' Verify Scroll down and handling Frame', async ({ page }) => {
    await page.goto('https://vivtechguru.com/practice.html');

    await page.locator('[title="Iframe Example"]').scrollIntoViewIfNeeded();

    //Frame handling
    const frame = await page.frameLocator('[title="Iframe Example"]');
    await frame.locator('(//*[@class="button home_button"]/a)[1]').click();
    await frame.locator('(//*[@class="button teachers_button"]/a)[1]').scrollIntoViewIfNeeded();
    await page.pause();
});



test('Verify Scroll down and handling Frame hhhh', async ({ page }) => {
    await page.goto('https://vivtechguru.com/practice.html');

    await page.locator('.customFeature_btn.customFeature_effect').scrollIntoViewIfNeeded();
    // mouse over
    await page.locator('.customFeature_btn.customFeature_effect').hover();



});


test(' Verify Scroll down and handling Frame1', async ({ page }) => {
    await page.goto('https://vivtechguru.com/practice.html');


    await page.locator('.blinkingText').scrollIntoViewIfNeeded();
    expect(await page.locator('.blinkingText')).toHaveCSS('animation', '1s linear infinite blink');

});

test(' Verify calendar Feature', async ({ page }) => {
    await page.goto('https://www.skyscanner.co.in/');
    await page.waitForSelector('.commonModal__close');

    // calendar handling

    // await page.locator('.commonModal__close').click();
    await page.getByTestId('depart-btn').click();

    await page.locator('//*[@aria-hidden="false" and @type="button"]').nth(0).click();

    await page.getByTestId('CalendarSearchButton').click();

    //await page.locator('//*[@aria-hidden="false" and @type="button"]').nth(1).click();

    await page.pause();
});

test(' Verify calendar Feature11', async ({ page }) => {
    await page.goto('https://www.goindigo.in/');

    // calendar handling

    // await page.locator('.commonModal__close').click();
    await page.getByText('Departure').click();
    await page.pause();

    await page.locator('//*[@class="rdrNextPrevButton rdrNextButton"]/i').click();



    //await page.locator('//*[@aria-hidden="false" and @type="button"]').nth(1).click();

    await page.pause();
});

test('@Smoke File Upload Example ', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator("[aria-label='Search by image']").click();

    // const filePath = 'C:\\Test\\MCP\\screenshot\\parentPage.png';
    await Promise.all([
        page.setInputFiles('input[type="file"]', 'C:\\Test\\MCP\\screenshot\\parentPage.png'),
        page.locator('//span[text()="upload a file  "]').click()
    ]);


    // // .setInputFiles(filePath);
    // await page.setInputFiles('input[type="file"]', 'C:\\Test\\MCP\\screenshot\\parentPage.png');
    await page.pause();
    // await page.setInputFiles('//span[text()="upload a file  "]', filePath);




});

