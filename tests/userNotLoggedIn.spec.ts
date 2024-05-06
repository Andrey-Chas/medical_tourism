import { test, expect } from '@playwright/test';

test('get the main page', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h5').first()).toBeVisible();
    await expect(page).toHaveTitle(/Medical Tourism/);
});

test('open offer', async ({ page }) => {
    await page.goto('/');

    for (const offer of await page.locator('h5').all()) {
        await offer.click();
        await page.waitForTimeout(5000);
        await expect(page.getByText('Log in?')).toBeVisible();
        await page.goto('/');
        await page.waitForTimeout(1000);
    }
})

test('login required', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h5').first()).toBeVisible();
    await page.goto('http://localhost:3000/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fcreate-address');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
})
