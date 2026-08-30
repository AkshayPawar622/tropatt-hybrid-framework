import { defineConfig, devices } from '@playwright/test';
import { environment } from './config/environment';

export default defineConfig({
  testDir: './tests',

  /* Maximum time one test can run */
  timeout: 30 * 1000,

  /* Maximum time for expect() assertions */
  expect: {
    timeout: 5 * 1000,
  },

  /* Run tests in parallel */
  fullyParallel: false,

  /* Prevent accidental test.only in CI */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests only in CI */
  retries: process.env.CI ? 2 : 0,

  /* Workers */
  workers: process.env.CI ? 1 : undefined,

  /* Reporting */
  reporter: [['html', { open: 'never' }],['allure-playwright']],

  use: {
    /* Application URL */
    baseURL: environment.baseURL,

    /* Capture trace when retrying a failed test */
    trace: 'on-first-retry',

    /* Screenshot only when test fails */
    screenshot: 'only-on-failure',

    /* Video only when test fails */
    video: 'retain-on-failure',

    /* Browser context settings */
    headless: true,

    /* Ignore HTTPS certificate errors if required */
    ignoreHTTPSErrors: true,
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});