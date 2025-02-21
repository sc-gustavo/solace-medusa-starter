import { test } from '@playwright/test';
import ShopPage from '../../fixtures/page-objects/1-homepage/shop-page';

test.describe('Shop page Tests', () => {
  let shoppage: ShopPage;  

test.beforeEach(async ({ page }) => {
    shoppage = new ShopPage(page);  
    await page.goto(shoppage.shopPageUrl);
  });

test('Check shop page loading and it`s title and header', async ({ page }) => {

  shoppage.checkTitleAndHeading()

});

test('Check filtering by collections', async({page}) => {

  shoppage.checkFilteringByCollections()

})

test('Check filtering by product type', async({page}) => {

  shoppage.checkFilteringByProductType()

})

test('Check filtering by material', async({page}) => {

  shoppage.checkFilteringByMaterial()

})

test('Check filtering by price', async({page}) => {

  shoppage.checkFilteringByPrice()

})

test('Check filter tabs and result of filtering', async({page}) => {

  shoppage.checkFilterResults() 

})

test('Check `Recommended products` section', async({page}) => {

  shoppage.checkRecommendedProducts()

})

test('Check pagination', async({page}) => {

  shoppage.checkPagination()

  })

})