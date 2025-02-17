import { test, expect } from '@playwright/test';
import Homepage from '../../fixtures/page-objects/1-homepage/homepage';

test.describe('Homepage Tests', () => {
  let homepage: Homepage;  

test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);  
  });

test.beforeEach(async ({ page }) => {
  await page.goto(homepage.shopPageUrl);
});

test('Check shop page loading and it`s title and header', async ({ page }) => {
    
    expect(homepage.shopPageUrl).toContain('/shop')

    const pageTitle = await page.title();

    expect(pageTitle).toBe('Shop - All products');

    const pageHeader = page.getByRole('heading', {name: 'All products'})

    expect(pageHeader).toBe('All products')
  
});

test('Check filtering by collections', async({page}) => {

    const collectionFilterBtn = page.getByTestId('data-testid="collection-filter')

    // dropdown appearing check
    await expect(collectionFilterBtn).toHaveAttribute('data-state', 'closed');

    await collectionFilterBtn.click();

    await expect(collectionFilterBtn).toHaveAttribute('data-state', 'open')

    // single item from filter check and click
    expect(page.getByTestId('ashton-filter-item')).toBeVisible()

    await page.locator('[data-testid="ashton-filter-item"] button[role="checkbox"]').click()

})

test('Check filtering by product type', async({page}) => {

    const productTypeFilterBtn = page.getByTestId('barstools-filter-item')

    // dropdown appearing check
    await expect(productTypeFilterBtn).toHaveAttribute('data-state', 'closed');

    await productTypeFilterBtn.click();

    await expect(productTypeFilterBtn).toHaveAttribute('data-state', 'open')

    // single item from filter check and click
    expect(page.getByTestId('barstools-filter-item')).toBeVisible()

    await page.locator('[data-testid="barstools-filter-item"] button[role="checkbox"]').click()

})

test('Check filtering by material', async({page}) => {

    const materialFilterBtn = page.getByTestId('leather-filter-item')

    // dropdown appearing check
    await expect(materialFilterBtn).toHaveAttribute('data-state', 'closed');

    await materialFilterBtn.click();

    await expect(materialFilterBtn).toHaveAttribute('data-state', 'open')

    // single item from filter check and click
    expect(page.getByTestId('leather-filter-item')).toBeVisible()

    await page.locator('[data-testid="leather-filter-item"] button[role="checkbox"]').click()

})

test('Check filtering by price', async({page}) => {

    const priceFilterBtn = page.getByTestId('under-$100-filter-item')

    // dropdown appearing check
    await expect(priceFilterBtn ).toHaveAttribute('data-state', 'closed');

    await priceFilterBtn .click();

    await expect(priceFilterBtn ).toHaveAttribute('data-state', 'open')

    // single item from filter check and click
    expect(page.getByTestId('under-$100-filter-item')).toBeVisible()

    await page.locator('[data-testid="under-$100-filter-item"] button[role="checkbox"]').click()

})

test('Check filter tabs and result of filtering', async({page}) => {

    // selector need improvement
    const container = await page.locator('.flex.flex-wrap.gap-4.gap-y-2');
    // ---

    const filterTabs = ['Ashton', 'Barstools', 'Leather', 'Under $100'];

    for (const filterTabText of filterTabs) {
        const item = await container.locator(`text=${filterTabText}`);
        await expect(item).toBeVisible();
  } 
})
})

// Remaining cases:
// 1. Pagination check
// 2.`Recommended products` section check