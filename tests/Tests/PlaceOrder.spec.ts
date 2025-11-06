import { test, expect } from '@playwright/test'
import * as Products from '../POM/Products'
import * as Cart from '../POM/Cart'
import * as PlaceOrder from '../POM/PlaceOrderAndTrack'
import * as login from '../POM/Login'

test('Test Case 1 - Full Purchase Flow', async ({ page }) => {

  // Step 1: Navigate to the site
  await page.goto('https://valentinos-magic-beans.click/')

  // Step 2: Login
  await test.step('Login to profile', async () => {
    await login.LoginValidData(page)
  })

  // Step 3: Add product to cart
  let ProductName: Awaited<ReturnType<typeof Products.AddProductToCart>> = {} as any

  await test.step('Add Product to cart', async () => {
    await page.getByRole('link', { name: 'Shop', exact: true }).click()
    ProductName = await Products.AddProductToCart(page, 1)
  })

  // Step 4: Assert Product name and price
  await test.step('Assert Product name and price', async () => {
    await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click()
    await Cart.assertProduct(page, ProductName.Name as string)
    await Cart.assertPrice(page, ProductName.Price as string)
  })

  // Step 5: Place Order
  let TrackOrderID: string | null = null

  await test.step('Place Order and return TrackOrderID', async () => {
    await page.locator('[data-test-id="proceed-to-checkout"]').click()

    // Each async function awaited
    await PlaceOrder.PlaceOrderEmptyform(page)
//  await PlaceOrder.ContactInformation(page)
    await PlaceOrder.ShippingAddress(page)
    await PlaceOrder.PaymentInformation(page)
   /* await PlaceOrder.PlaceOrderBtn(page)

    // Await the returned text
    TrackOrderID = await PlaceOrder.GetTrackOrderID(page)

    // Optional: Assert OrderID exists
    expect(TrackOrderID, 'Order ID should be generated after placing order').not.toBeNull()*/
  })

})
