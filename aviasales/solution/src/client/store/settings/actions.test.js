import * as actionTypes from 'src/store/settings/action-types';
import * as actions from 'src/store/settings/actions';


describe('Settings action creators', () => {
  it('should create an action to change currency', () => {
    const currency = 'RUB';
    const expectedAction = {
      type: actionTypes.CHANGE_CURRENCY,
      currency,
    };
    expect(actions.changeCurrency(currency)).toEqual(expectedAction);
  });

  it('should create an action to set stops filter', () => {
    const stopsCountings = ['3', '2', '1', '0'];
    const expectedAction = {
      type: actionTypes.SET_STOPS_FILTER,
      stops: {
        0: true,
        1: false,
        2: false,
        3: false,
      },
    };
    expect(actions.setStopsFilter(...stopsCountings)).toEqual(expectedAction);
  });

  it('should create an action to set empty stops filter when no stops has been passed', () => {
    const stopsCountings = [];
    const expectedAction = {
      type: actionTypes.SET_STOPS_FILTER,
      stops: {},
    };
    expect(actions.setStopsFilter(...stopsCountings)).toEqual(expectedAction);
  });

  it('should create an action to change stops filter', () => {
    const changedStops = { 2: true };
    const expectedAction = {
      type: actionTypes.CHANGE_STOPS_FILTER,
      stops: changedStops,
    };
    expect(actions.changeStopsFilter(changedStops)).toEqual(expectedAction);
  });
});
