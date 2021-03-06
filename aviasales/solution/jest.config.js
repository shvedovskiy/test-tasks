module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '^lodash-es$': '<rootDir>/node_modules/lodash/index.js',
    '^src(.*)$': '<rootDir>/src/client$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/lib/'],
  setupTestFrameworkScriptFile: '<rootDir>src/shared/setup-tests.js',
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  // transform: {
  //   '^.+\\.(js|jsx)$': '<rootDir>src/shared/tests-transform.js',
  // },
  // transformIgnorePatterns: ['/node_modules/(?!lodash-es).+\\.js$'],
};
