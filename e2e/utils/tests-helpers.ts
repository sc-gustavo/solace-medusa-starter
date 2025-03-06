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

export async function fillShippingAddressInputs(page){

  await page.getByTestId('shipping-first-name-input').fill('Adam');

  await page.getByTestId('shipping-last-name-input').fill('Nowak');

  await page.getByTestId('shipping-company-input').fill('Firma');

  await page.getByTestId('shipping-address-input').fill('Mokra 12');

  await page.getByTestId('shipping-postal-code-input').fill('00-999');

  await page.getByTestId('shipping-city-input').fill('Warsaw');

  await page.getByTestId('shipping-province-input').fill('Mazowieckie');

  await page.getByTestId('billing-email-input').fill('adam@example.com');

  await page.getByTestId('shipping-phone-input').fill('444222000');
}


const helpers = {
    waitForPageLoad,
    fillSignupInputs,
    fillSignInInputs,
    goToSignUpPage,
    goToSignInPage,
    login,
    goToSingleProductPage,
    goToCartPage,
    fillShippingAddressInputs
};
export default helpers;

