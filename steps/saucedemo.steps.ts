import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('que estou na página de login', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

When('eu faço login com usuário {string} e senha {string}', async ({ page }, user: string, pass: string) => {
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').fill(pass);
  await page.locator('[data-test="login-button"]').click();
});

Given('que estou logado como {string}', async ({ page }, user: string) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory\.html/);
});

Then('devo ver a página de inventário', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});

Then('devo ver uma mensagem de erro de login', async ({ page }) => {
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

Then('devo ver uma mensagem de usuário bloqueado', async ({ page }) => {
  const err = page.locator('[data-test="error"]');
  await expect(err).toBeVisible();
  await expect(err).toContainText('locked out');
});

When('eu faço logout', async ({ page }) => {
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
});

Then('devo voltar para a página de login', async ({ page }) => {
  await expect(page).toHaveURL(/saucedemo\.com\/?$/);
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

// Catálogo
Then('devo ver a lista de produtos', async ({ page }) => {
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6); // costuma ser 6
});

When('eu ordeno os produtos por {string}', async ({ page }, option: string) => {
  await page.locator('[data-test="product-sort-container"]').selectOption({ label: option });
});

Then('a lista deve estar ordenada por nome em ordem decrescente', async ({ page }) => {
  const names = await page.locator('[data-test="inventory-item-name"]').allTextContents();
  const sorted = [...names].sort((a, b) => b.localeCompare(a));
  expect(names).toEqual(sorted);
});

Then('a lista deve estar ordenada por preço em ordem crescente', async ({ page }) => {
  const pricesText = await page.locator('[data-test="inventory-item-price"]').allTextContents();
  const prices = pricesText.map(t => Number(t.replace('$', '')));
  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sorted);
});

// Carrinho
When('eu adiciono o produto {string} ao carrinho', async ({ page }, product: string) => {
  const item = page.locator('[data-test="inventory-item"]').filter({ hasText: product });
  await item.locator('button:has-text("Add to cart")').click();
});

When('eu removo o produto {string} do carrinho', async ({ page }, product: string) => {
  const item = page.locator('[data-test="inventory-item"]').filter({ hasText: product });
  await item.locator('button:has-text("Remove")').click();
});

Then('o badge do carrinho deve ser {string}', async ({ page }, value: string) => {
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(value);
});

Then('o badge do carrinho não deve existir', async ({ page }) => {
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
});

When('eu abro o carrinho', async ({ page }) => {
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL(/cart\.html/);
});

When('eu volto para o inventário', async ({ page }) => {
  await page.locator('[data-test="continue-shopping"]').click();
  await expect(page).toHaveURL(/inventory\.html/);
});

// Checkout
When('eu inicio o checkout', async ({ page }) => {
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

When('eu continuo o checkout sem preencher dados', async ({ page }) => {
  await page.locator('[data-test="continue"]').click();
});

Then('devo ver uma mensagem de erro no checkout', async ({ page }) => {
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

When(
  'eu preencho o checkout com first name {string}, last name {string} e postal code {string}',
  async ({ page }, first: string, last: string, postal: string) => {
    await page.locator('[data-test="firstName"]').fill(first);
    await page.locator('[data-test="lastName"]').fill(last);
    await page.locator('[data-test="postalCode"]').fill(postal);
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(/checkout-step-two\.html/);
  }
);

When('eu finalizo a compra', async ({ page }) => {
  await page.locator('[data-test="finish"]').click();
});

Then('devo ver a confirmação de pedido', async ({ page }) => {
  await expect(page).toHaveURL(/checkout-complete\.html/);
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
});

Given('que eu adiciono o produto {string} ao carrinho', async ({ page }, product: string) => {
  const item = page.locator('[data-test="inventory-item"]').filter({ hasText: product });
  await item.locator('button:has-text("Add to cart")').click();
});