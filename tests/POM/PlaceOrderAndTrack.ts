import { type Page, expect } from '@playwright/test'

export const TestData = {
    firstName: 'Ons',
    lastName: 'Ouni',
    email: 'ons@test.com',
    Address: 'XYZ street',
    zip: '23233',
    country: 'Spain',
    city: 'Madrid',
    payemnt: {
        cardName: 'Ons',
        cardNumber: '1234567891234567',
        expiry: '12/30',
        CVC: '533'
    }



}
export async function PlaceOrderEmptyform(page: Page) {

    await page.locator('[data-test-id="place-order-button"]').click()
    await expect(page.getByText('First name is required.')).toBeVisible()
    await expect(page.getByText('Last name is required.')).toBeVisible()
    await expect(page.getByText('Please enter a valid email.')).toBeVisible()
    await expect(page.getByText('Address is required.')).toBeVisible()
    await expect(page.getByText('City is required.')).toBeVisible()
    await expect(page.getByText('ZIP code must be 5 digits.')).toBeVisible()
    await expect(page.getByText('Name on card is required.')).toBeVisible()
    await expect(page.getByText('Please enter a valid 16-digit')).toBeVisible()
    await expect(page.getByText('Expiry must be in MM/YY')).toBeVisible()
    await expect(page.getByText('CVC must be 3 or 4 digits.')).toBeVisible()

}

export async function ContactInformation(page: Page) {
    
    const firstNameInput = page.locator('input[name="firstName"]')
    await firstNameInput.fill(TestData.firstName)
    const lastNameInput = page.locator('input[name="lastName"]')
    await lastNameInput.fill(TestData.lastName)
    const emailInput=  page.locator('input[name="email"]')
    await emailInput.fill(TestData.email)

}

export async function ShippingAddress(page:Page) {
    const AddressInput =  page.locator('[data-test-id="checkout-address-input"]')
    const CityInput =  page.locator('[data-test-id="checkout-city-input"]')
    const ZIPInput = page.locator('[data-test-id="checkout-zipcode-input"]')
    const CountryInput = page.locator('[data-test-id="checkout-country-input"]')
    await AddressInput.fill(TestData.Address)
    await CityInput.fill(TestData.city)
    await ZIPInput.fill(TestData.zip)
    await CountryInput.fill(TestData.country)

}

export async function PaymentInformation(page:Page) {
  const CardNameInput = page.locator('input[name="cardName"]')
  const CardNumberInput = page.locator('input[name="cardNumber"]')
  const CardExpiryInput = page.locator('[data-test-id="checkout-cardexpiry-input"]')
  const CVCInput = page.locator('input[name="cardCvc"]')
  await CardNameInput.fill(TestData.payemnt.cardName)
  await CardNumberInput.type(TestData.payemnt.cardNumber)
  await CVCInput.type(TestData.payemnt.CVC)
  await CardExpiryInput.fill(TestData.payemnt.expiry)

}


export async function PlaceOrderBtn(page:Page) {
    await page.getByRole('button', {name: 'Place Order'}).click()
    
}

export async function GetTrackOrderID(page:Page) {
    const OrderWrapper =  page.getByText('Your Order ID is:').locator('..')
    const OrderID = OrderWrapper.getByRole('paragraph').nth(1).textContent()
    return OrderID
}
