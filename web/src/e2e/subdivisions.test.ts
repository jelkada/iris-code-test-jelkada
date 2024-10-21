import { test, expect } from '@playwright/test';

test.describe('test subdivisions table page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });
  
  test('should have UI elements on the page', async ({ page }) => {
    await expect(page.getByText('Filter')).toBeVisible();
    await expect(page.getByRole('button', { name: 'All', exact: true })).toBeVisible();  
    await expect(page.getByRole('button', { name: 'Active', exact: true })).toBeVisible();  
    await expect(page.getByRole('button', { name: 'Future', exact: true })).toBeVisible();  
    await expect(page.getByRole('button', { name: 'Build out', exact: true })).toBeVisible();  
   
    await expect(page.getByRole('img', { name: 'image' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next page', exact: true })).toBeVisible();  
  
    await expect(page.locator('table tr td')).not.toHaveCount(0);
    await page.getByRole('button', { name: 'Active', exact: true }).click();
  });

  test('should filter table rows when a filter is selected on the page', async ({ page }) => {
    await expect(page.getByText('Filter')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Active', exact: true })).toBeVisible();
    const tableRows = await page.locator('table tr td').count();
    expect(tableRows).toBeGreaterThan(0);

    const allRowsText = await page.locator('.mat-paginator-range-actions .mat-paginator-range-label').textContent() as string;
    const allRows = allRowsText.trim().split(' ').pop() as string;
    await page.getByRole('button', { name: 'Active', exact: true }).click();
    const activeRowsText = await page.locator('.mat-paginator-range-actions .mat-paginator-range-label').textContent() as string;
    const activeRows = activeRowsText.trim().split(' ').pop() as string;
    expect(+activeRows).toBeLessThan(+allRows); // just an example (need to test edge cases)
  });
});
