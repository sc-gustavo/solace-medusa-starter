export async function editAccountDetails(page) {
  
    const AccountDetailsButton = page.getByTestId('account-settings-nav-item').nth(1)
    await AccountDetailsButton.click()
   
   
    const EditButton = page.getByTestId('edit-details-button').first()
    await EditButton.click()
   
   
    const FirstName = page.getByTestId('first-name-input')
    const LastName = page.getByTestId('last-name-input')
    const Phone = page.getByTestId('phone-input')
   
   
    await FirstName.fill('firstName')
    await LastName.fill('lastName')
    await Phone.fill('503123123')
   }
   
   