import { test, expect } from '@playwright/test';

test('1. Проверка наличия текстов на странице', async ({ page }) => {
  await page.goto('https://site.mstimetables.ru/01a00f53d32773b5b396bf3eb6f57ce2/groups/259?date=2026-11-09');

  await expect(page.getByText('Понедельник').first()).toBeVisible();
  await expect(page.getByText('Обеспечение качества функционирования компьютерных систем').first()).toBeVisible();
  await expect(page.getByText('Околот Д.').first()).toBeVisible();
});