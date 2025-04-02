// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173/'

test('Km to m conversion test', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  await page.click('#length')
  const firstUnitSelector = await page.locator('#originalNumberSelector')
  const secondUnitSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')

  // Select the base systems
  await firstUnitSelector.selectOption('km')
  await secondUnitSelector.selectOption('m')

  // Fill elements with data and submit the form
  await inputNumber.fill('3')
  await inputNumber.press('Enter')

  // Check if the application is returning the correct value
  const responseNumber = await page.locator('#responseNumber')
  await expect(responseNumber).toHaveText('3000 m')
})

test('Km to mm conversion test', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  await page.click('#length')
  const firstUnitSelector = await page.locator('#originalNumberSelector')
  const secondUnitSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')

  // Select the base systems
  await firstUnitSelector.selectOption('km')
  await secondUnitSelector.selectOption('mm')

  // Fill elements with data and submit the form
  await inputNumber.fill('3')
  await inputNumber.press('Enter')

  // Check if the application is returning the correct value
  const responseNumber = await page.locator('#responseNumber')
  await expect(responseNumber).toHaveText('3000000 mm')
})

test('mm to cm conversion test', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  await page.click('#length')
  const firstUnitSelector = await page.locator('#originalNumberSelector')
  const secondUnitSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')

  // Select the base systems
  await firstUnitSelector.selectOption('mm')
  await secondUnitSelector.selectOption('cm')

  // Fill elements with data and submit the form
  await inputNumber.fill('12')
  await inputNumber.press('Enter')

  // Check if the application is returning the correct value
  const responseNumber = await page.locator('#responseNumber')
  await expect(responseNumber).toHaveText('1.2 cm')
})

test('km to mi conversion test', async ({ page }) => {
  // GO to the website and map the elements needed
  await page.goto(URL)
  await page.click('#length')
  const firstUnitSelector = await page.locator('#originalNumberSelector')
  const secondUnitSelector = await page.locator('#convertedNumberSelector')
  const inputNumber = await page.locator('#inputNumber')

  // Select the base systems
  await firstUnitSelector.selectOption('km')
  await secondUnitSelector.selectOption('mi')

  // Fill elements with data and submit the form
  await inputNumber.fill('4.5')
  await inputNumber.press('Enter')

  // Check if the application is returning the correct value
  const responseNumber = await page.locator('#responseNumber')
  await expect(responseNumber).toHaveText('2.796170365068003 mi')
})
