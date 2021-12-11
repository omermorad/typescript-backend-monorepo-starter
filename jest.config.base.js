module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: false,
  testRegex: '.spec|test.ts$',
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/'
  ],
  coverageReporters: [
    'text',
    'cobertura',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true
};
