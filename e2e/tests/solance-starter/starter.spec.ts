import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
// import { config } from '../config'
import { fillAddressInputs } from '../../fixtures/starter/fill-address-inputs'
import { createSelectors } from '../../utils/starter-locators/locators'
import { starterLogin } from '../../fixtures/starter/starter-login'
import { fillShippingAddressInputs } from '../../fixtures/starter/fill-shipping-address-inputs'
import { editAccountDetails } from '../../fixtures/starter/edit-account-details'
import page from 'app/[countryCode]/(main)/page';
import dotenv from 'dotenv';

// Timeout config
// export default defineConfig({
//   timeout: 10 * 1000, // 10 seconds
// });

const selectors = createSelectors(page)

// Page title test
test('Page has title', async ({ page }) => {
 await page.goto(process.env.BASE_URL);
 await expect(page).toHaveTitle(/Solace Medusa/);
});

// Main page elements visibility
// deleted 2 menu elements, only one selector is available
test('main page elements visibilty', async ({ page }) => {
 await page.goto(process.env.BASE_URL);

 //Header elements
 const cartLink = selectors.cartLink();
 await expect(cartLink).toBeVisible();
});

// Search test
test('search', async ({ page }) => {
 await page.goto(process.env.SEARCH_URL);

 //Check products visibility
 const searchResults = selectors.searchResults()
 await expect(searchResults).toBeVisible();
});

// Product page test
test('product page', async ({ page }) => {
 await page.goto(process.env.PRODUCT_URL);
 await expect(selectors.productTitle()).toBeVisible();
 await expect(selectors.productPrice()).toBeVisible();
 await expect(selectors.ordersDeliverLink()).toBeVisible();
 await expect(selectors.aboutUsLink()).toBeVisible();
});

// Changing categories test
// verification of header menu
test('categories', async ({ page }) => {
 await page.goto(process.env.BASE_URL);

 // Horizontal menu select
 const shopMenuButton = selectors.shopMenuButton();
 await (shopMenuButton).hover();

 const categorySelect = selectors.categorySelect();
 await (categorySelect).click();

 const searchResults = selectors.searchResults();
 await expect(searchResults).toBeVisible();
});

// Test user area
test('user login', async ({ page }) => {
 await page.goto(process.env.ACCOUNT_URL);

 // Login, check if correct customer is logged in
 starterLogin(page)
  //Go to address section
 // --- selector need imptovement (replace nth)---
 const accountSettings = selectors.accountSettings()
 await accountSettings.click()
 // ---

 const addAddress = selectors.addAddress()
 await addAddress.click()
  // Fill address inputs
 await fillAddressInputs(page)

 // Add address button
 const saveButton = selectors.saveButton()
 await saveButton.click()
});

// Test orders display
test('check orders history', async ({ page }) => {
 await page.goto(process.env.ACCOUNT_URL);

  // Login, check if correct customer is logged in
  starterLogin(page)

 // Go to orders tab
 const ordersHistory = selectors.ordersHistory()
 await ordersHistory.click();


 const ordersPageWrapper = selectors.orderPageWrapper()
 await expect(ordersPageWrapper).toBeVisible();
});

// Test checkout area
test('Checkout', async ({ page }) => {

 await page.goto(process.env.PRODUCT_URL);

 // Proceed to checkout from product page
 const addToCartButton = selectors.addToCartButton()
 await (addToCartButton).click();

 // --------- Need improvement
 await page.waitForTimeout(5000);
 // ----------

 await page.goto(process.env.CART_URL);

 const proceedCheckoutButton = selectors.proceedToCheckoutButton()
 await (proceedCheckoutButton).click();

 fillShippingAddressInputs(page)
  // Confirm Address
 const submitAddress = selectors.submitAddressButton()
 await (submitAddress).click()

 //Delivery method select
 const standardShippingMethod = selectors.standardShippingMethod()
 await (standardShippingMethod).click()

 //Payment method selection
 const proceedToPayment = selectors.proceedToPaymentButton()
 await proceedToPayment.click();

 const manualPayment = selectors.manualPayment()
 await manualPayment.click();

 //Totals visibility
 const cartSubtotal = selectors.cartSubtotal()
 await cartSubtotal.isVisible();

 const cartShipping = selectors.cartShipping()
 await cartShipping.isVisible() 

 const cartTotal = selectors.cartTotal()
 await cartTotal.isVisible();

 const placeOrder = selectors.placeOrder()
 await placeOrder.click();
});

// Test footer links loading
test('load footer links', async ({ page }) => {
 await page.goto(process.env.BASE_URL);

 const aboutUsLink = selectors.aboutUsLink()
 await aboutUsLink.click();

 const termsAndCondition = selectors.termsAndConditions()
 await expect(termsAndCondition).toBeVisible();
 });

//Edit account details
// Test footer links loading
test('edit account details', async ({ page }) => {
 await page.goto(process.env.ACCOUNT_URL);

 // Login, check if correct customer is logged in
 starterLogin(page)

 editAccountDetails(page)

 const saveDetailsButton = selectors.saveDetailsButton()
 await saveDetailsButton.click()
 });

