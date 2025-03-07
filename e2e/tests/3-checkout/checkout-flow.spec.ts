export{}

import { test, expect } from '@playwright/test';
import AddToCart from '../../fixtures/page-objects/3-checkout/adding-to-cart';
import Checkout from '../../fixtures/page-objects/3-checkout/checkout-flow'
import helpers from '../../utils/tests-helpers';

test.describe('Checkout flow', () => {

  let checkout: Checkout

  test.beforeEach(async ({ page, browser }) => {

    checkout = new Checkout(page)

    await helpers.waitForPageLoad(page)
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'timedOut' && testInfo.status !== 'interrupted') {
      await page.close();
    }
  });

  test('Check flow of whole purchasing process', async ({ page }) => {
    // add product to cart
    await checkout.addProductToCart()

    // fill shipping address
    await helpers.fillShippingAddressInputs(page)

    // save and proceed to delivery step
    await checkout.saveAndProceedToDeliveryStep()

    // edit shipping details
    await checkout.editShippingDetails()

    // check if shipping details was edited correctly
    await checkout.checkEditedShippingDetails()

  })

})