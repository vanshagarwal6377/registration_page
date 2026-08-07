const { test, expect } = require('@playwright/test');

test('TC-01: Check header, button, and page load', async ({ page }) => {
  // CSO: body/header should load html
  await page.goto('/');
  
  // Check that the page header (h2) loads correctly
  const header = page.locator('h2');
  await expect(header).toContainText('Registration Form');
  
  // Check that the submit button is present
  const submitButton = page.locator('button[type="submit"]');
  await expect(submitButton).toBeVisible();
  
  // Check that all form fields are loaded
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#mobile')).toBeVisible();
  
  console.log('Registration Test w');
  console.log('TC-01: Check header, button, loaded.html expect: PASS');
});

test('shows a validation message for a short password', async ({ page }) => {
  await page.goto('/');
  await page.fill('#name', 'Alice');
  await page.fill('#password', '123');
  await page.fill('#contact', 'tester');
  await page.fill('#mobile', '123456789');
  await page.click('button[type="submit"]');

  await expect(page.locator('.message')).toContainText('Password must be at least 6 characters long.');
});

test('submits successfully with valid input', async ({ page }) => {
  await page.goto('/');
  await page.fill('#name', 'Alice');
  await page.fill('#password', 'abcdef');
  await page.fill('#contact', 'tester');
  await page.fill('#mobile', '1234567890');
  await page.click('button[type="submit"]');

  await expect(page.locator('.message')).toContainText('Form submitted successfully!');
});
