import { pluralStop, splitPrice } from './utils';

describe('utility functions', () => {
  it("pluralize 'stop' word", () => {
    expect(pluralStop('0')).toEqual('пересадок');
    expect(pluralStop('1')).toEqual('пересадка');
    expect(pluralStop('2')).toEqual('пересадки');
    expect(pluralStop('5')).toEqual('пересадок');
    expect(pluralStop('101')).toEqual('пересадка');
  });

  it('split price string', () => {
    expect(splitPrice('0')).toEqual('0');
    expect(splitPrice('5000')).toEqual('5 000');
    expect(splitPrice('10000')).toEqual('10 000');
    expect(splitPrice('100000')).toEqual('100 000');
    expect(splitPrice('1000000')).toEqual('1 000 000');
  });
});
