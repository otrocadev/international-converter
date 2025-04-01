import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173/'

test('Initial elements renderization', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  const menu = await page.locator('#convertionTypeMenu')
  const firstBaseSelector = await page.locator('#originalNumberSelector')
  const secondBaseSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')
  const submitButton = await page.locator('#submitBtn')

  // Check if elements are rendered & have the expected initial state
  await expect(menu).toBeVisible()
  // Selectors
  await expect(firstBaseSelector).toBeVisible()
  await expect(firstBaseSelector).toHaveValue('')
  await expect(secondBaseSelector).toBeVisible()
  await expect(secondBaseSelector).toHaveValue('')
  // Input field
  await expect(inputNumber).toBeVisible()
  await expect(inputNumber).toBeEmpty()
  // Submit buton
  await expect(submitButton).toBeVisible()
})
