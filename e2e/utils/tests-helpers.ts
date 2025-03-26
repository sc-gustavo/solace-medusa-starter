export {}

export async function waitForPageLoad(page) {

    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
}

export default waitForPageLoad;





