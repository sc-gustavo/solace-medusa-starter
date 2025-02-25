export{}

import { Page, expect } from '@playwright/test'
import { visible } from 'ansi-colors';
class ShopPage {

    page: Page
    shopPageUrl: string

    constructor(page: Page) {
        this.page = page;
        this.shopPageUrl = 'https://solace-medusa-starter.vercel.app/shop';
    }

    async checkTitleAndHeading() {

        expect(this.shopPageUrl).toContain('/shop')

        await this.page.waitForSelector('h1');

        const pageHeader = await this.page.$eval('h1', el => el.textContent);

        expect(pageHeader).toBe('All products')

    }

    async checkFilteringByCollections() {

        expect(this.shopPageUrl).toContain('/shop')

        await this.page.waitForLoadState('load');

        await this.page.waitForLoadState('domcontentloaded');

        //Doesnt work - all the time we have 'test ended' error
        const collectionFilterBtn = this.page.getByRole('button', {name: 'Collections'});

        await collectionFilterBtn.click({force: true});

        await this.page.waitForTimeout(4000)
        /// - - - - - - - - - - - - - - - - - 

        // single item from filter check and click
        await this.page.locator('[data-testid="ashton-filter-item"] button[role="checkbox"]').waitFor()
        
        await this.page.locator('[data-testid="ashton-filter-item"] button[role="checkbox"]').click({ force: true });

        expect(this.shopPageUrl).toContain(this.shopPageUrl)
    }

    async checkFilteringByProductType() {

        const productTypeFilterBtn = this.page.getByTestId('barstools-filter-item')

        // dropdown appearing check
        await expect(productTypeFilterBtn).toHaveAttribute('data-state', 'closed');

        await productTypeFilterBtn.click();

        await expect(productTypeFilterBtn).toHaveAttribute('data-state', 'open')

        // single item from filter check and click
        expect(this.page.getByTestId('barstools-filter-item')).toBeVisible()

        await this.page.locator('[data-testid="barstools-filter-item"] button[role="checkbox"]').click()
    }

    async checkFilteringByMaterial() {

        const materialFilterBtn = this.page.getByTestId('leather-filter-item')

        // dropdown appearing check
        await expect(materialFilterBtn).toHaveAttribute('data-state', 'closed');

        await materialFilterBtn.click();

        await expect(materialFilterBtn).toHaveAttribute('data-state', 'open')

        // single item from filter check and click
        expect(this.page.getByTestId('leather-filter-item')).toBeVisible()

        await this.page.locator('[data-testid="leather-filter-item"] button[role="checkbox"]').click()
    }

    async checkFilteringByPrice() {

        const priceFilterBtn = this.page.getByTestId('under-$100-filter-item')

        // dropdown appearing check
        await expect(priceFilterBtn ).toHaveAttribute('data-state', 'closed');

        await priceFilterBtn .click();

        await expect(priceFilterBtn ).toHaveAttribute('data-state', 'open')

        // single item from filter check and click
        expect(this.page.getByTestId('under-$100-filter-item')).toBeVisible()

        await this.page.locator('[data-testid="under-$100-filter-item"] button[role="checkbox"]').click()
    }

    async checkFilterResults() {
        
        // selector need improvement
        const container = this.page.locator('.flex.flex-wrap.gap-4.gap-y-2');
        // ---

        const filterTabs = ['Ashton', 'Barstools', 'Leather', 'Under $100'];

        for (const filterTabText of filterTabs) {
            const item = container.locator(`text=${filterTabText}`);
            await expect(item).toBeVisible();
        } 
    }

    async checkRecommendedProducts() {

        // check heading - selector needed
        const recommendedProductsHeading = this.page.locator('.small:gap-12 h2:text("Recommended product")')

        expect(recommendedProductsHeading).toHaveText('Recommended products')
        //--

        // check recomended products existing

        // selector needed
        const recommendedProductsSection = this.page.locator('.flex.gap-2');
        // --

        const allRecommendedProducts = recommendedProductsSection.locator('*');

        const recommendedProductsCount = await allRecommendedProducts.count();

        expect(recommendedProductsCount).toBeGreaterThan(0);

    }

    async checkPagination() {

        const pagination = this.page.getByTestId('product-pagination')

        expect(pagination).toBeVisible()
  
        // click on second page
        const page2Link = pagination.locator('a', { hasText: '2' });

        await page2Link.waitFor();

        page2Link.click()

        await this.page.waitForURL(/.*page=2/);

        expect(this.page.url()).toContain('page=2');

        // click on first page
        const page1Link = pagination.locator('a', { hasText: '1' });

        await page1Link.waitFor();

        page1Link.click()

        await this.page.waitForURL(/.*page=1/);

        expect(this.page.url()).toContain('page=1');
    }
}

export default ShopPage;