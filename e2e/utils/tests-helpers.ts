import { expect } from "@playwright/test";


export async function waitForPageLoad(page) {

    await page.waitForLoadState('domcontentloaded');
    
    await page.waitForLoadState('load');
}

export async function fillSignupInputs(page) {

    await page.getByTestId('first-name-input').fill('Adam');

    await page.getByTestId('last-name-input').fill('Nowak');

    await page.getByTestId('email-input').fill('nowak@example.com');

    await page.getByTestId('phone-input').fill('444000111');

    await page.getByTestId('password-input').fill('Password!1');

    await page.getByLabel('I read and agree to Terms &').click();
}

export async function fillSignInInputs(page) {

    await page.getByTestId('email-input').fill('nowak@example.com');

    await page.getByTestId('password-input').fill('Password!1');
}

export async function goToSignUpPage(page) {

    await page.goto('https://solace-medusa-starter.vercel.app/de')

    await page.getByTestId('profile-dropdown-button').hover()

    await page.getByRole('link', { name: 'Sign up' }).click();
}

export async function goToSignInPage(page) {

    await page.goto('https://solace-medusa-starter.vercel.app/de')

    await page.getByTestId('profile-dropdown-button').hover()

    await page.getByRole('link', { name: 'Sign in' }).click();
}

export async function login(page) {

    goToSignInPage(page)

    fillSignInInputs(page)

    await page.getByTestId('sign-in-button').click({force: true});
}

export async function goToSingleProductPage(page) {

    await page.goto('https://solace-medusa-starter.vercel.app/de/products/winsdor-bar-stool')

    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/products/winsdor-bar-stool')

    await expect(page).toHaveURL(/products\/winsdor-bar-stool/)

    waitForPageLoad(page)
}

export async function goToCartPage(page) {

    await page.goto('https://solace-medusa-starter.vercel.app/de/cart')

    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/cart')

    await expect(page).toHaveURL(/\/cart/)

    waitForPageLoad(page)
}


const helpers = {
    waitForPageLoad,
    fillSignupInputs,
    fillSignInInputs,
    goToSignUpPage,
    goToSignInPage,
    login,
    goToSingleProductPage,
    goToCartPage
};
export default helpers;

