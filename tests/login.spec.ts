import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('link', { name: 'Already have an account? Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Already have an account? Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('john@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('123john');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.getByRole('heading', { name: 'Medical Tourism' })).toBeVisible();
});

test('incorrect credentials', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('link', { name: 'Already have an account? Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Already have an account? Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('john@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('john123');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Invalid Credentials')).toBeVisible();
});
