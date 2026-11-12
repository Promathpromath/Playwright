import { test, expect } from '@playwright/test';

test('3. Проверка перехода на другую страницу', async ({ page }) => {
  await page.goto('https://site.mstimetables.ru/01a00f53d32773b5b396bf3eb6f57ce2/groups/259?date=2026-11-09');

  const oldUrl = page.url();

  const link = page.getByRole('link', { name: /группы/i }).first();
  if (await link.isVisible()) {
    await link.click();
  } else {
    await page.goto('https://site.mstimetables.ru/01a00f53d32773b5b396bf3eb6f57ce2/groups');
  }

  await expect(page).not.toHaveURL(oldUrl);
});