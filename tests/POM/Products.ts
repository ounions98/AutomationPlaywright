import {type Page} from '@playwright/test'

export async function AddProductToCart(page: Page, Index: Number) {
    const Product = page.locator('.p-6').first()
    const ProductName = await Product.getByRole('heading').first().textContent()
    const ProductPrice = await Product.locator('.font-bold').textContent()
    console.log(ProductName, ProductPrice)
    await page.locator('[data-test-id="product-card-add-to-cart-button-504"]').click()

    return{
        Name: ProductName,
        Price: ProductPrice
    }
}