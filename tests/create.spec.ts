import { test, expect } from '@playwright/test';

test('create address', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('link', { name: 'Already have an account? Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Already have an account? Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('andrchas777@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('andrey');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Create')).toBeVisible();
    await page.getByText('Create').click();
    
    await expect(page.getByRole('link', { name: 'Create address' })).toBeVisible();
    await page.getByRole('link', { name: 'Create address' }).click();

    await expect(page.getByRole('heading', { name: 'Create Address' })).toBeVisible();

    await expect(page.getByPlaceholder('Name of the city...')).toBeVisible();
    await page.getByPlaceholder('Name of the city...').click();
    await page.getByPlaceholder('Name of the city...').fill('Test City');

    await expect(page.getByPlaceholder('Name of the country...')).toBeVisible();
    await page.getByPlaceholder('Name of the country...').click();
    await page.getByPlaceholder('Name of the country...').fill('Test Country');

    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();
    
    await expect(page.getByText('Created!View')).toBeVisible();
});

test('create clinic', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('link', { name: 'Already have an account? Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Already have an account? Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('andrchas777@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('andrey');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Create')).toBeVisible();
    await page.getByText('Create').click();
    
    await expect(page.getByRole('link', { name: 'Create clinic' })).toBeVisible();
    await page.getByRole('link', { name: 'Create clinic' }).click();

    await expect(page.getByRole('heading', { name: 'Create Clinic' })).toBeVisible();

    await expect(page.getByPlaceholder('Name of the clinic...')).toBeVisible();
    await page.getByPlaceholder('Name of the clinic...').click();
    await page.getByPlaceholder('Name of the clinic...').fill('Test Clinic');

    await expect(page.getByPlaceholder('Name of the specialisation...')).toBeVisible();
    await page.getByPlaceholder('Name of the specialisation...').click();
    await page.getByPlaceholder('Name of the specialisation...').fill('Test Specialisation');

    await expect(page.getByRole('combobox')).toBeVisible();
    await page.getByRole('combobox').selectOption('6639520dc3004830384b57e0');

    await expect(page.getByPlaceholder('Url...')).toBeVisible();
    await page.getByPlaceholder('Url...').click();
    await page.getByPlaceholder('Url...').fill('http://localhost:3000/create-clinic');

    await expect(page.getByPlaceholder('Phone number...')).toBeVisible();
    await page.getByPlaceholder('Phone number...').click();
    await page.getByPlaceholder('Phone number...').fill('86096896');

    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page.getByText('Created!View')).toBeVisible();
});

test('create destination', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('link', { name: 'Already have an account? Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Already have an account? Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('andrchas777@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('andrey');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.getByText('Create')).toBeVisible();
    await page.getByText('Create').click();
    
    await expect(page.getByRole('link', { name: 'Create destination' })).toBeVisible();
    await page.getByRole('link', { name: 'Create destination' }).click();

    await expect(page.getByRole('heading', { name: 'Create Destination' })).toBeVisible();

    await expect(page.getByPlaceholder('Name of the destination...')).toBeVisible();
    await page.getByPlaceholder('Name of the destination...').click();
    await page.getByPlaceholder('Name of the destination...').fill('Test Destination');

    await expect(page.getByRole('combobox')).toBeVisible();
    await page.getByRole('combobox').selectOption('6639520dc3004830384b57e0');
    
    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();
    
    await expect(page.getByText('Created!View')).toBeVisible();
});

test('create hotel', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('link', { name: 'Already have an account? Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Already have an account? Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('andrchas777@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('andrey');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Create')).toBeVisible();
    await page.getByText('Create').click();

    await expect(page.getByRole('link', { name: 'Create hotel' })).toBeVisible();
    await page.getByRole('link', { name: 'Create hotel' }).click();

    await expect(page.getByRole('heading', { name: 'Create Hotel' })).toBeVisible();

    await expect(page.getByPlaceholder('Name of the hotel...')).toBeVisible();
    await page.getByPlaceholder('Name of the hotel...').click();
    await page.getByPlaceholder('Name of the hotel...').fill('Test Hotel');

    await expect(page.getByRole('combobox')).toBeVisible();
    await page.getByRole('combobox').selectOption('6639520dc3004830384b57e0');
    
    await expect(page.getByPlaceholder('Url...')).toBeVisible();
    await page.getByPlaceholder('Url...').click();
    await page.getByPlaceholder('Url...').fill('http://localhost:3000/create-hotel');

    await expect(page.getByPlaceholder('Phone number...')).toBeVisible();
    await page.getByPlaceholder('Phone number...').click();
    await page.getByPlaceholder('Phone number...').fill('98567497');

    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page.getByText('Created!View')).toBeVisible();
});

test('create offer', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Medical Tourism/);

    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign Up' }).click();

    await expect(page.getByRole('link', { name: 'Already have an account? Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Already have an account? Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('andrchas777@gmail.com');

    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('andrey');

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Create')).toBeVisible();
    await page.getByText('Create').click();

    await expect(page.getByRole('link', { name: 'Create offer' })).toBeVisible();
    await page.getByRole('link', { name: 'Create offer' }).click();

    await expect(page.getByRole('heading', { name: 'Create Offer' })).toBeVisible();
    
    await expect(page.getByPlaceholder('Name of the offer...')).toBeVisible();
    await page.getByPlaceholder('Name of the offer...').click();
    await page.getByPlaceholder('Name of the offer...').fill('Test Offer');

    await expect(page.getByRole('combobox').first()).toBeVisible();
    await page.getByRole('combobox').first().selectOption('6639520dc3004830384b57e0');

    await expect(page.getByRole('combobox').nth(1)).toBeVisible();
    await page.getByRole('combobox').nth(1).selectOption('66395444c3004830384b5822');

    await expect(page.getByRole('combobox').nth(2)).toBeVisible();
    await page.getByRole('combobox').nth(2).selectOption('6639569fc3004830384b5869');

    await expect(page.getByRole('combobox').nth(3)).toBeVisible();
    await page.getByRole('combobox').nth(3).selectOption('663955bdc3004830384b5850');

    await expect(page.getByPlaceholder('Write description here...')).toBeVisible();
    await page.getByPlaceholder('Write description here...').click();
    await page.getByPlaceholder('Write description here...').fill('Test Description');

    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();
    
    await expect(page.getByText('Created!View')).toBeVisible();
});
