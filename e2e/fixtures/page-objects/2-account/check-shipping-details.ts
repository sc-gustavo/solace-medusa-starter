export{}


import { Page, expect } from '@playwright/test'
import helpers from '../../../utils/tests-helpers';

class ShippingDetails {

    page: Page

    constructor(page: Page) {
        this.page = page;
    }

async checkShippingDetailsPage() {

    await this.page.locator("li[data-testid='shipping-details-nav-item']").click()

    await expect(this.page).toHaveURL(/\/account\/addresses$/)
}

async addNewAddress() {

    // check if we doesn't have any address
    const noSavedAddressesHeading = await this.page.getByText('No saved shipping addresses')

    expect(noSavedAddressesHeading).toBeTruthy()

    // click button and open modal
    await this.page.getByRole('button', { name: 'Add address' }).click()

    const addNewAddressModal = await this.page.getByRole('dialog')

    expect(addNewAddressModal).toBeTruthy()

    // fill modal and save
    await helpers.addNewShippingDetailsAddress(this.page)
}

async checkNewAddress() {

    const newAddressUserName = this.page.getByText('Adam Nowak');

    await expect(newAddressUserName).toContainText(/Adam Nowak/i, { timeout: 3000 });
}
}
export default ShippingDetails