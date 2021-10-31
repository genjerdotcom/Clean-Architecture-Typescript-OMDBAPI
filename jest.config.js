/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  testMatch: [
    '<rootDir>/**/__tests__/**/?(*.)(spec|test).ts',
    '<rootDir>/**/?(*.)(spec|test).ts'
  ],
  collectCoverageFrom: [
    "src/delivery/http/controllers/*.ts*",
    "src/useCase/*.ts*"
  ],
};