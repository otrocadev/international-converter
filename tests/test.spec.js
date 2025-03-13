// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173/'

test('Initial elements renderization', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  const firstBaseSelector = await page.locator('#originalNumberSelector')
  const secondBaseSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')
  const submitButton = await page.locator('#submitBtn')

  // Check if elements are rendered & have the expected initial state
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

test('Dec to Bin conversion test', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  const firstBaseSelector = await page.locator('#originalNumberSelector')
  const secondBaseSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')

  // Select the base systems
  await firstBaseSelector.selectOption('dec')
  await secondBaseSelector.selectOption('bin')

  // Fill elements with data and submit the form
  await inputNumber.fill('33')
  await inputNumber.press('Enter')

  // Check if the application is returning the correct value
  const responseNumber = await page.locator('#responseNumber')
  await expect(responseNumber).toHaveText('100001')
})

test('Bin to Dec conversion test', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  const firstBaseSelector = await page.locator('#originalNumberSelector')
  const secondBaseSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')

  // Select the base systems
  await firstBaseSelector.selectOption('bin')
  await secondBaseSelector.selectOption('dec')

  // Fill elements with data and submit the form
  await inputNumber.fill('1100110001')
  await inputNumber.press('Enter')

  // Check if the application is returning the correct value
  const responseNumber = await page.locator('#responseNumber')
  await expect(responseNumber).toHaveText('563')
})
