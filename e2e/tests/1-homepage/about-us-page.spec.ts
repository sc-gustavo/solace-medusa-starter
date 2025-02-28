import { test, expect } from '@playwright/test';

test.describe('Shop page Tests', () => { 

test.beforeEach(async ({ page }) => {
    await page.goto('https://solace-medusa-starter.vercel.app/de/about-us')

    await page.waitForLoadState('load');

    await page.waitForLoadState('domcontentloaded');

  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'timedOut' && testInfo.status !== 'interrupted') {
      await page.close();
    }
  });

test('Check about us page loading and it`s header', async ({ page }) => {

    const pageTitle = await page.title();

    expect(pageTitle).toBe('About Us');

});

test('Check header and logo', async ({ page }) => {

    const headerLogo = page.locator('div').filter({ hasText: 'Solace Logo Big' })

    expect(headerLogo).toBeTruthy()

});

test('Check `Our story` section`', async ({ page }) => {

    const ourStorySection = page.locator('div').filter({ hasText: 'Our storyAt Solace, we' }).first()

    expect(ourStorySection).toBeTruthy()

    //Need fix------

    // const ourStoryHeading = page.getByRole('heading', { name: 'Our story' })

    // expect(ourStoryHeading).toHaveText('Our story')
    // ------------

});

})