export async function fillAddressInputs(page) {
    const firstName = await page.getByTestId('first-name-input').first()
  const lastName = await page.getByTestId('last-name-input').first()
  const company = await page.getByTestId('company-input').first()
  const address1 = await page.getByTestId('address-1-input').first()
  const postcode = await page.getByTestId('postal-code-input').first()
  const city = await page.getByTestId('city-input').first()
  const state = await page.getByTestId('state-input').first()
  const country = await page.getByTestId('country-select').first()
  const phone = await page.getByTestId('phone-input').first()
 
 
  // Filling address inputs
  await firstName.fill('firstName')
  await lastName.fill('lastName')
  await company.fill('company')
  await address1.fill('strasse')
  await postcode.fill('10115')
  await state.fill('state')
  await city.fill('city')
  await country.selectOption('Germany')
  await phone.fill('503123123')
  }
 
 