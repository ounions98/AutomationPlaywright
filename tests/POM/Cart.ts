import {type Page, expect} from '@playwright/test'

export async function assertProduct(page: Page, heading:string){
    const ProductHeading = page.getByRole('heading', {name : heading} )
    await expect(ProductHeading).toBeVisible()

}

export async function assertPrice(page: Page, Price:string) {
    const Subtotal = await page.getByText('Subtotal').locator('..').locator('.font-semibold').textContent()
    const CartPrice =  await page.locator('.p-6').locator('..').locator('.font-bold').first().textContent()
    expect(Subtotal).toEqual(Price)
    expect(CartPrice).toEqual(Price)
    return {Subtotal, CartPrice}
    
}

