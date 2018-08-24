module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/client$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>src/client/setupTests.js',
};
