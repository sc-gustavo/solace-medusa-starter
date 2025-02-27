export {}

export async function waitForPageLoad(page) {
    
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    await page.waitForLoadState('networkidle');
}

export default waitForPageLoad;





