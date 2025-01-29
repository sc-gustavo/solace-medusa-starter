
export const createSelectors = (page) => ({
    shopMenuButton: () => page.getByText('Shop').first(),
    categorySelect: () => page.getByText('Dining Chairs').first(),
    searchResults: () => page.getByTestId('products-list').first(),
    cartLink: () =>  page.getByTestId('nav-cart-link').first(),
    productTitle: () => page.getByTestId('product-title'),
    productPrice: () => page.getByTestId('product-price'),
    ordersDeliverLink: () => page.getByTestId('orders-and-delivery-link'),
    aboutUsLink: () => page.getByTestId('about-us-link'),
    emailInput: () => page.getByTestId('email-input').first(),
    passwordInput: () => page.getByTestId('password-input').first(),
    signInButton: () => page.getByTestId('sign-in-button').first(),
    accountSettings: () => page.getByText('Shipping details').nth(1),
    addAddress: () => page.getByText('Add new address').first(),
    saveButton: () => page.getByText('Save').first(),
    ordersHistory: () => page.getByText('Order history').nth(1),
    orderPageWrapper: () => page.getByTestId('orders-page-wrapper').first(),
    addToCartButton: () => page.getByTestId('add-product-button').first(),
    proceedToCheckoutButton: () => page.getByText('Proceed to checkout'),
    submitAddressButton: () => page.getByTestId('submit-address-button').first(),
    standardShippingMethod: () => page.getByText('Standard Shipping'),
    proceedToPaymentButton: () => page.getByText('Proceed to payment').first(),
    manualPayment: () => page.getByText('Manual Payment').first(),
    cartSubtotal: () => page.getByTestId('cart-subtotal').first(),
    cartShipping: () => page.getByTestId('cart-shipping').first(),
    cartTotal: () => page.getByTestId('cart-total').first(),
    placeOrder: () => page.getByText('Place order').first(),
    termsAndConditions: () => page.getByText('Terms & Conditions').first(),
    saveDetailsButton: () => page.getByTestId('save-details-button').first()
 
 
  });
  
 