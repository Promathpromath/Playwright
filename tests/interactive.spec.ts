import { test, expect } from '@playwright/test';

test('2. Проверка работы интерактивных элементов', async ({ page }) => {
  await page.goto('https://site.mstimetables.ru/01a00f53d32773b5b396bf3eb6f57ce2/groups/259?date=2026-11-09');

  const tuesdayBtn = page.getByText('Вторник').first();
  await tuesdayBtn.click();

  await expect(page.getByText('Нет занятий').first()).toBeVisible();
});