module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  testPathIgnorePatterns: ['\\node_modules\\', '\\test\\'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/client$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
  },
};
