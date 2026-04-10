module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
 transform: {
  '^.+\\.(ts|js|html)$': [
    'ts-jest',
    { tsconfig: '<rootDir>/tsconfig.spec.json' }
  ]
},



  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/**/*.module.ts'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)'
  ]
};

