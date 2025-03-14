export {}

import { Page, expect } from '@playwright/test'
import helpers from '../../../utils/tests-helpers';

class AccountSettings {

    page: Page

    constructor(page: Page) {
        this.page = page;
    }

async goToAccountSettings() {

    await this.page.locator("li[data-testid='account-settings-nav-item']").click()

    await expect(this.page).toHaveURL(/\/account\/profile$/)
}

async checkAccountSettingsExisting() {

   const profileDetailsBox = await this.page.getByTestId('profile-pagge-wrapper')

   await expect(profileDetailsBox).toBeTruthy()
}
}