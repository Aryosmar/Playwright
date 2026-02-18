import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// defineBddConfig retorna uma STRING com o diretório onde os testes gerados ficam
const testDir = defineBddConfig({
  features: ['features/**/*.feature'],
  steps: ['steps/**/*.ts'],
  outputDir: '.bdd-gen',
});

export default defineConfig({
  testDir,

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [['html', { open: 'never' }], ['list']],

  projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      channel: 'chrome',
    },
  },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
],

});
