import { type Page, expect } from '@playwright/test'

export const SignUpdata = {
    FirstName: 'Ons',
    LastName: 'Ouni',
    Email: 'ons.test@example.com',
    WrongPassword: '123456789',
    Password: 'Ab@12345'

}
export async function SignUpEmptyForm(page: Page) {
    await page.locator('[data-test-id="signup-submit-button"]').click()
    await expect(page.getByText('First name must be at least 2')).toBeVisible()
    await expect(page.getByText('Last name must be at least 2')).toBeVisible()
    await expect(page.getByText('Please enter a valid email')).toBeVisible()
    await expect(page.getByText('Password must be at least 8')).toBeVisible()

}

export async function SignUpwithIncorrectPassword(page: Page) {
    const firstNameInput = page.locator('input[name="firstName"]')
    const lasttNameInput = page.locator('input[name="lastName"]')
    const emailInput = page.locator('input[name="email"]')
    const passwordInput = page.locator('input[name="password"]')
    firstNameInput.fill(SignUpdata.FirstName)
    lasttNameInput.fill(SignUpdata.LastName)
    emailInput.fill(SignUpdata.Email)
    passwordInput.fill(SignUpdata.WrongPassword)
    await page.locator('[data-test-id="signup-submit-button"]').click()
    await page.getByRole('status').click();
    await expect(page.getByRole('status')).toContainText('Sign Up Failed');
}

export async function  SignUpWithValidData(page:Page) {

    const firstNameInput = page.locator('input[name="firstName"]')
    const lasttNameInput = page.locator('input[name="lastName"]')
    const emailInput = page.locator('input[name="email"]')
    const passwordInput = page.locator('input[name="password"]')
    firstNameInput.fill(SignUpdata.FirstName)
    lasttNameInput.fill(SignUpdata.LastName)
    emailInput.fill(SignUpdata.Email)
    passwordInput.fill(SignUpdata.Password)
    await page.locator('[data-test-id="signup-submit-button"]').click()    
    
}