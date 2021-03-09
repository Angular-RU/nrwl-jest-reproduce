const { createTsJestConfig } = require('@angular-ru/jest-utils');

module.exports = createTsJestConfig({
  debug: true,
  tsConfig: './tsconfig.base.json',
  jestConfig: {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
    testMatch: ['<rootDir>/apps/hello-world/src/app/**/*.spec.ts'],
  },
});
