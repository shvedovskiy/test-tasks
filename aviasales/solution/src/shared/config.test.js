/* eslint-disable global-require */
describe('config file', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('check production mode', () => {
    process.env.NODE_ENV = 'production';
    expect(require('./config').isProd).toBeTruthy();
  });

  it("check production mode if NODE_ENV equals 'development'", () => {
    process.env.NODE_ENV = 'development';
    expect(require('./config').isProd).toBeFalsy();
  });

  it('default backend port', () => {
    expect(require('./config').port).toEqual('3000');
  });

  it('development backend port', () => {
    process.env.NODE_ENV = 'development';
    process.env.DEV_SERVER_PORT = '8888';
    expect(require('./config').port).toEqual('8888');
  });

  it('development backend port without specified port variable', () => {
    process.env.NODE_ENV = 'development';
    expect(require('./config').port).toEqual('3000');
  });

  it('production backend port', () => {
    process.env.NODE_ENV = 'production';
    process.env.SERVER_PORT = '5008';
    expect(require('./config').port).toEqual('5008');
  });

  it('production backend port without specified port variable', () => {
    process.env.NODE_ENV = 'production';
    expect(require('./config').port).toEqual('3000');
  });

  it('development backend address', () => {
    process.env.NODE_ENV = 'development';
    process.env.DEV_SERVER_PORT = '8888';
    expect(require('./config').address).toEqual('http://localhost:8888/');
  });

  it('production backend address with specified NOW variable', () => {
    process.env.NOW = 'true';
    process.env.NOW_URL = 'https://aviasales-test-task.now.sh';
    expect(require('./config').address).toEqual('https://aviasales-test-task.now.sh/');
  });

  it('production backend address without server host name variable', () => {
    process.env.NODE_ENV = 'production';
    process.env.SERVER_PORT = '5008';
    expect(require('./config').address).toEqual('http://localhost:5008/');
  });

  it('production backend address with server host name variable', () => {
    process.env.NODE_ENV = 'production';
    process.env.SERVER_HOSTNAME = 'custom.example';
    process.env.SERVER_PORT = '5008';
    expect(require('./config').address).toEqual('http://custom.example:5008/');
  });

  it('production backend address with server host name and HTTPS variables', () => {
    process.env.NODE_ENV = 'production';
    process.env.HTTPS = 'true';
    process.env.SERVER_HOSTNAME = 'custom.example';
    process.env.SERVER_PORT = '5008';
    expect(require('./config').address).toEqual('https://custom.example:5008/');
  });
});
/* eslint-enable global-require */
