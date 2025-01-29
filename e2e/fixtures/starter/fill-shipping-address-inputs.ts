// import dotenv from 'dotenv';

export async function fillShippingAddressInputs(page) {
 const FirstName = page.getByTestId('shipping-first-name-input')
 const LastName = page.getByTestId('shipping-last-name-input')
 const Company = page.getByTestId('shipping-company-input').first()
 const Address = page.getByTestId('shipping-address-input').first()
 const Postcode = page.getByTestId('shipping-postal-code-input').first()
 const State = page.getByTestId('shipping-province-input').first()
 const City = page.getByTestId('shipping-city-input').first()
 const Phone = page.getByTestId('shipping-phone-input').first()
 const Email =  page.getByTestId('billing-email-input').first()


 // Address filling
 await FirstName.fill('firstName')
 await LastName.fill('lastName')
 await Company.fill('company')
 await Address.fill('strasse')
 await Postcode.fill('10115')
 await State.fill('state')
 await City.fill('city')
 await Phone.fill('503123123')
 await Email.fill(process.env.USER_EMAIL)
}

