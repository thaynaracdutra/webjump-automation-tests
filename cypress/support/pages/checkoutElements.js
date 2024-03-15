class checkoutElements {
    email = '[name="username"]'
    firstName = '[name="firstname"]'
    lastName = '[name="lastname"]'
    companyName = '[name="company"]'
    streetAddress = '[name="street[0]"]'
    stateSelect = '[name="region_id"]'
    cityName = '[name="city"]'
    postalCode = '[name="postcode"]'
    phoneNumber = '[name="telephone"'
    shippingMethod = ':nth-child(1) > :nth-child(1) > .radio'
    submit = '.button'
    shippingAddressCorfirm = '[name="billing-address-same-as-shipping"]'
    placeOrder = '.payment-method-content > :nth-child(4) > div.primary > .action > span'
    purchaseCompleteText = '.base'
}
export default new checkoutElements