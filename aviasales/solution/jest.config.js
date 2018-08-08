module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/client$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
  },
};
