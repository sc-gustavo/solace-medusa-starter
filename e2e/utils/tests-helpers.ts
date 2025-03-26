

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

export async function goToSignUpPage(page) {

    await page.goto('https://solace-medusa-starter.vercel.app/de')

    await page.getByTestId('profile-dropdown-button').hover()

    await page.getByRole('link', { name: 'Sign up' }).click();
}


const helpers = {
    waitForPageLoad,
    fillSignupInputs,
    goToSignUpPage
};
export default helpers;



/* import should looks like:
import helpers from './nazwaPliku';

await helpers.waitForPageLoad(page);
await helpers.fillSignupInputs(page);
*/
