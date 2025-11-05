/*import { test, expect } from '@playwright/test'
import * as Products from '../POM/Products'
import * as Cart from '../POM/Cart'
import * as PlaceOrder from '../POM/PlaceOrderAndTrack'
import * as login from '../POM/Login'

test('Test Case 1', async ({ page }) => {

  let URL = await page.goto('https://valentinos-magic-beans.click/')
   await test.step('Login to profile', async()=>{
   login.LoginValidData(page)
  await page.getByRole('link', { name: 'Shop', exact: true }).click()

   
  })


  let ProductName: Awaited<ReturnType<typeof Products.AddProductToCart>> = {} as any
  

  await test.step('Add Product to cart', async () => {
    ProductName = await Products.AddProductToCart(page, 1) //We added to item to the cart
  })

  await test.step('Assert Product name and price', async () => {
    await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click()
    await Cart.assertProduct(page, ProductName.Name as string) //check that the product is the same that we added to the cart
    await Cart.assertPrice(page, ProductName.Price as string) //check that the price is the same that we added to the cart

  })

  let TrackOrderID: string | null
  
  await test.step('Place Order and return TrackOrderID', async () => {
    await page.locator('[data-test-id="proceed-to-checkout"]').click()
    await PlaceOrder.PlaceOrderEmptyform(page)
    await PlaceOrder.ContactInformation(page)
    await PlaceOrder.ShippingAddress(page)
    await PlaceOrder.PaymentInformation(page)
    await PlaceOrder.PlaceOrderBtn(page)
    TrackOrderID = await PlaceOrder.GetTrackOrderID(page)

  })


})

*/