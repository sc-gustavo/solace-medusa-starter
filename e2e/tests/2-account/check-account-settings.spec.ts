export{}

import { test } from '@playwright/test';
import helpers from '../../utils/tests-helpers';

test.describe('Acount settings page', () => {


  test.beforeEach(async ({ page, browser }) => {


    await helpers.waitForPageLoad(page)
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'timedOut' && testInfo.status !== 'interrupted') {
      await page.close();
    }
  });

  test('Check account settings page', async ({ page }) => {

    // login
    await helpers.login(page)

    // go to account
    await helpers.goToAccount(page)

    

})
})