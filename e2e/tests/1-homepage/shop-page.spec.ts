import { test } from '@playwright/test';
import Homepage from '../../fixtures/page-objects/1-homepage/homepage';
import ShopPage from '../../fixtures/page-objects/1-homepage/shop-page';

test.describe('Shop page Tests', () => {
  let homepage: Homepage;
  let shoppage: ShopPage;  

test.beforeEach(async ({ page }) => {
    shoppage = new ShopPage(page);  
  });

test.beforeEach(async ({ page }) => {
  await page.goto(homepage.shopPageUrl);
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