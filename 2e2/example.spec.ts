import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite \+ React \+ TS/)
})

test('Click on Add user button', async ({ page }) => {
  await page.goto('/')
  // Click the get add user.
  await page.getByRole('button', { name: 'Add user' }).click()
  // Expects page to have a heading with the name of Installation.
  await page.waitForResponse((response) => {
    return response.url().includes('/api/users') // Replace with the URL pattern you're interested in.
  })
  await expect(page.getByRole('list')).toContainText(/test@email.com/)
})
