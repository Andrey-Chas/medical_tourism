import { test, expect } from '@playwright/test';

test('registration', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('Test First Name');
    
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('Test Last Name');

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('test@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('test');

    await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
});

test('user exists', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('Test First Name');
    
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('Test Last Name');

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('test@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('test');

    await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
    await page.getByRole('button', { name: 'Register' }).click();
    
    await expect(page.getByText('User already exists')).toBeVisible();
});
