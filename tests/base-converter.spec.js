// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173/'

test('Dec to Bin conversion tests', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  await page.click('#base')
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
  await page.click('#base')
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
  await expect(responseNumber).toHaveText('817')
})
