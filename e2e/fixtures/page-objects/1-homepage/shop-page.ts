export{}

import { Page, expect } from '@playwright/test'
import waitForPageLoad  from '../../../utils/tests-helpers'
class ShopPage {

    page: Page
    shopPageUrl: string
    homeURL: string

    constructor(page: Page) {
        this.page = page;
        this.shopPageUrl = 'https://solace-medusa-starter.vercel.app/de/shop';
        this.homeURL = 'https://solace-medusa-starter.vercel.app/de'
    }

    async checkTitleAndHeading() {

        expect(this.shopPageUrl).toContain('/shop')

        await this.page.waitForSelector('h1');

        const pageHeader = await this.page.$eval('h1', el => el.textContent);

        expect(pageHeader).toBe('All products')

    }

    async checkFilteringByCollections() {
        
        await waitForPageLoad(this.page)

        expect(this.shopPageUrl).toContain('/shop')

        const collectionFilterBtn = this.page.getByLabel('Choose collection/s')

        await expect(collectionFilterBtn).toBeVisible()

        await collectionFilterBtn.click({force: true});

        // single item from filter check and click
        await this.page.locator('[data-testid="ashton-filter-item"] button[role="checkbox"]').waitFor()
        
        await this.page.locator('[data-testid="ashton-filter-item"] button[role="checkbox"]').click({ force: true });

    }

    async checkFilteringByProductType() {

        await waitForPageLoad(this.page)

        expect(this.shopPageUrl).toContain('/shop')

        const productTypeFilterBtn = this.page.getByLabel('Choose product type/s')

        await productTypeFilterBtn.click();

        // single item from filter check and click
        expect(this.page.getByTestId('barstools-filter-item')).toBeVisible()

        await this.page.locator('[data-testid="barstools-filter-item"] button[role="checkbox"]').click()
    }

    async checkFilteringByMaterial() {

        await waitForPageLoad(this.page)

        expect(this.shopPageUrl).toContain('/shop')

        const materialFilterBtn = this.page.getByLabel('Choose material/s')

        await materialFilterBtn.click();

        // single item from filter check and click
        expect(this.page.getByTestId('leather-filter-item')).toBeVisible()

        await this.page.locator('[data-testid="leather-filter-item"] button[role="checkbox"]').click()
    }

    async checkFilteringByPrice() {

        const priceFilterBtn = this.page.getByLabel('Choose price')

        await priceFilterBtn .click();

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