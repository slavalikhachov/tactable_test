const jestConfig = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testMatch: ['**/tests/*.ts?(x)'],
  }
  
  module.exports = jestConfig