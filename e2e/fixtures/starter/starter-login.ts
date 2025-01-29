
import { createSelectors } from '../../utils/starter-locators/locators'


export async function starterLogin(page) {


const selectors = createSelectors(page);


 const emailInput = selectors.emailInput()
 await emailInput.fill(process.env.USER_EMAIL)


 const passwordInput = selectors.passwordInput()
 await passwordInput.fill(process.env.USER_PASSWORD)


 const signInButton = selectors.signInButton()
 await signInButton.click()
}

