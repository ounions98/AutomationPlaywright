import { test, expect } from '@playwright/test'
import * as Products from '../POM/Products'
import * as login from '../POM/Login'
import * as Cart from '../POM/Cart'


test.describe('Place Order', async () => {

  test('Login and Place Order', async ({ page }) => {

    let URL = await page.goto('https://valentinos-magic-beans.click/')
    await test.step('Login to profile', async () => {
      await login.LoginValidData(page)
    })



    let ProductName: Awaited<ReturnType<typeof Products.AddProductToCart>> = {} as any
    await page.getByRole('link', { name: 'Shop', exact: true }).click()

    await test.step('Add Product to cart', async () => {
      ProductName = await Products.AddProductToCart(page, 1) //We added to item to the cart
    })

    await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click()

    await test.step('Assert Product name and price', async () => {
      await Cart.assertProduct(page, ProductName.Name as string) //check that the product is the same that we added to the cart
      await Cart.assertPrice(page, ProductName.Price as string) //check that the price is the same that we added to the cart

    })
    page.pause()


  })
})
