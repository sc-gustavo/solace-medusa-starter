export{}

import { test, expect, BrowserContext } from '@playwright/test';
import AddToCart from '../../fixtures/page-objects/3-checkout/adding-to-cart';
import helpers from '../../utils/tests-helpers';

test.describe('Checkout flow', () => {
  test.describe.configure({ mode: 'serial' });

  let addToCart: AddToCart;
  
  let context: BrowserContext;

  test.beforeEach(async ({ page, browser }) => {

    addToCart = new AddToCart(page)

    await helpers.waitForPageLoad(page)

    context = await browser.newContext({ storageState: 'auth.json' });

  });

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();

    const page = await context.newPage();
    
    await page.close();
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'timedOut' && testInfo.status !== 'interrupted') {
      await page.close();
    }
  });

  test('Add product to cart and go to checkout', async ({ page }) => {

    await addToCart.addProductToCart()

    await addToCart.checkCartItems()

    await page.getByRole('button', { name: 'Proceed to checkout' }).click()

    await helpers.waitForPageLoad(page)

    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=address')
    
    await expect(page).toHaveURL(/checkout\?step=address$/);
    
  })

  test('Check shipping address step', async ({ page }) => {

    // check if we are in checkout
    await page.goto('https://solace-medusa-starter.vercel.app/de/checkout?step=address')

    await helpers.waitForPageLoad(page)

    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=address')
    
    await expect(page).toHaveURL(/checkout\?step=address$/);

    // fill shipping address
    await helpers.fillShippingAddressInputs(page)

    // save and proceed to delivery step
    await page.getByTestId('submit-address-button').click();

    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=delivery')
    
    await expect(page).toHaveURL(/checkout\?step=address$/);

    // edit shipping details
    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=address')
    
    await expect(page).toHaveURL(/checkout\?step=address$/);

    await page.getByTestId('shipping-first-name-input').fill('');

    await page.getByTestId('shipping-first-name-input').fill('Jan');

    await page.getByTestId('submit-address-button').click();

    await page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=delivery')
    
    await expect(page).toHaveURL(/checkout\?step=address$/);

    // check if shipping details was edited correctly
    const editedShippingDetailsName = await page.getByText('Jan Nowak')

    expect(editedShippingDetailsName).toHaveText('Jan Nowak')
  })

})