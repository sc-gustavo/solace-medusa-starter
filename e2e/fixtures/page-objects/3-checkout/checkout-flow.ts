export{}

import { Page, expect } from '@playwright/test'
import AddToCart from './adding-to-cart'
import helpers  from '../../../utils/tests-helpers'

class Checkout {

    page: Page
    addToCart: AddToCart

    constructor(page: Page) {
        this.page = page;
        this.addToCart = new AddToCart(page);
    }

async addProductToCart() {

    await this.addToCart.addProductToCart()

    await this.addToCart.goToCartViaButton()

    await this.page.getByRole('button', { name: 'Proceed to checkout' }).click()

    await helpers.waitForPageLoad(this.page)

    await this.page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=address')
    
    await expect(this.page).toHaveURL(/checkout\?step=address$/);
}

async saveAndProceedToDeliveryStep() {

    await this.page.getByTestId('submit-address-button').click();

    await this.page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=delivery')
    
    await expect(this.page).toHaveURL(/checkout\?step=delivery$/);

    await this.page.goBack({waitUntil: 'load'})

    await helpers.waitForPageLoad(this.page)
}

async editShippingDetails() {

    await this.page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=address')
    
    await expect(this.page).toHaveURL(/checkout\?step=address$/);

    await helpers.waitForPageLoad(this.page)

    await this.page.getByTestId('edit-address-button').nth(0).click()

    const firstNameInput = await this.page.getByTestId('shipping-first-name-input');

    await firstNameInput.click();

    await firstNameInput.fill('');

    await firstNameInput.fill('Jan');

    await this.page.getByRole('button', {name: "Proceed to delivery"}).click()

    await helpers.waitForPageLoad(this.page)
}

async checkEditedShippingDetails() {

    await this.page.waitForURL('https://solace-medusa-starter.vercel.app/de/checkout?step=delivery')
    
    await expect(this.page).toHaveURL(/checkout\?step=delivery$/);

    await helpers.waitForPageLoad(this.page)

    const shippingAddressSummary = await this.page.getByTestId('shipping-address-summary')

    await expect(shippingAddressSummary).toContainText(/Jan Nowak/i, { timeout: 3000 });
}
}
export default Checkout