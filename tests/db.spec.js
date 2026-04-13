import { test, expect } from '@playwright/test';
import DBUtils from '../utils/dbUtils';

let db;

test.beforeAll(async () => {
    db = new DBUtils();
    await db.connect();
});

test.afterAll(async () => {
    await db.close();
});

test('Validate flight booking in DB', async ({ page }) => {

    // Step 1: Perform UI/API action
    // (example: booking flight)

    const bookingId = '12345';

    // Step 2: Validate in DB
    const result = await db.query(
        `SELECT * FROM bookings WHERE id = '${bookingId}'`
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result[0].status).toBe('CONFIRMED');
});