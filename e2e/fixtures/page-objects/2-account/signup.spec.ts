export{}
import { test, expect } from '@playwright/test';

test.describe('Signup Tests', () => { 

test.beforeEach(async ({ page }) => {

    await page.goto('https://solace-medusa-starter.vercel.app/de')

    await page.waitForLoadState('load');

    await page.waitForLoadState('domcontentloaded');

  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'timedOut' && testInfo.status !== 'interrupted') {
      await page.close();
    }
  });

test('Go to `/account` page', async ({ page }) => {

    await page.getByTestId('profile-dropdown-button').hover()

    await page.getByRole('link', { name: 'Sign up' }).click();

    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/account')

    await expect(page).toHaveURL(/\/account/)
})

test('Check `Create account` page items and inputs validation', async ({ page }) => {

    // ---------- Few functions needed
    // 1 - check page heading
    const signUpPageHeading = await page.getByRole('heading', { name: 'Create account' })

    expect(signUpPageHeading).toBeTruthy()

    // 2 - check sign up form component
    const signUpForm = await page.getByTestId('register-page')

    expect(signUpForm).toBeTruthy()

    // 3 - check empty inputs validation
    const emptyInputsError = await page.locator('div').filter({ hasText: /^Please enter$/ }).getByRole('paragraph')

    expect(emptyInputsError).toBeTruthy()

    // 4 - check password input validation
    // check invalid number of characters
    await page.locator('#password').fill('test')

    await page.getByTestId('register-button').click();

    const atLeast8CharactersError = await page.locator('p').filter({ hasText: 'At least 8 characters' })

    expect(atLeast8CharactersError).toBeTruthy()


    // check lack of upper case
    await page.getByTestId('password-input').fill('testtestt')

    await page.getByTestId('register-button').click();

    const upperCaseError = await page.locator('p').filter({ hasText: 'One uppercase letter' })

    expect (upperCaseError).toBeTruthy()

    // check lack of number or symbol
    await page.getByTestId('password-input').fill('testtesttT')

    await page.getByTestId('register-button').click();

    const numberOrSymbolError = await page.locator('p').filter({ hasText: 'One number or symbol' })

    expect (numberOrSymbolError).toBeTruthy()

    // overwrite input for clearing
    await page.getByTestId('password-input').fill('')


})

});