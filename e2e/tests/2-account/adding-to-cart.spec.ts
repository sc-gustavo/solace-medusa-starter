await page.waitForSelector('[data-testid="delete-button"]', {
  state: 'visible',
})
await page.getByTestId('delete-button').click()

await expect(page).toHaveURL(/.*\/checkout\?step=address$/)

const toast = await page.getByText('Product was removed from cart.')
