import { type Page, expect } from '@playwright/test'

export async function LoginValidData(page: Page) {

  await page.goto('/')
  await page.locator('[data-test-id="header-login-button-desktop"]').getByRole('button', { name: 'Login' }).click();
  const emailInput = page.locator('[data-test-id="login-email-input"]')
  const passInput = page.locator('[data-test-id="login-password-input"]')
  await emailInput.fill('moyifi1990@limtu.com')
  await passInput.fill('12345678Ab')
  await page.locator('[data-test-id="login-submit-button"]').click()
  const profile= page.locator('//*[@id="radix-:r3:"]')
  await profile.click()
  await expect(page.getByText('Welcome!')).toBeVisible()
  await expect(page.getByText('moyifi1990@limtu.com')).toBeVisible()
  await expect(page.getByRole('menuitem', { name: 'Log out' })).toBeVisible()
  await page.locator('html').click()

}

