import React from 'react';
import _ from 'lodash';

import StopsCheckbox from './stops-checkbox';
import { pluralStop } from '~/utils';


function _selectAllStops(stops, changeStops) {
  return ({ target: { checked }}) => {
    const newStops = _.mapValues(stops, () => checked);

    changeStops(newStops);
  }
}

function _selectStop(changeStops) {
  return ({ target: { value, checked }}) => {
    changeStops({ [value]: checked });
  }
}

function _selectOnlyStop(stops, changeStops) {
  return newValue => () => {
    const newStops = _.mapValues(stops, (__, stop) => stop === newValue);
    changeStops(newStops);
  };
}

const Stops = ({ stops, changeStops }) => {
  const selectAllStops = _selectAllStops(stops, changeStops);
  const selectStop = _selectStop(changeStops);
  const selectOnlyStop = _selectOnlyStop(stops, changeStops);

  const checkedAll = Object.values(stops).every(v => v === true);

  return (
    <div>
      <StopsCheckbox onChange={selectAllStops} checked={checkedAll}>All</StopsCheckbox>
      {
        Object.keys(stops).map(stop => (
          <span key={stop}>
            <StopsCheckbox
              value={stop}
              checked={stops[stop]}
              onChange={selectStop}
            >
              { stop === '0' ? 'Без пересадок' : `${stop} ${pluralStop(stop)}`}
            </StopsCheckbox>
            <button onClick={selectOnlyStop(stop)}>Только</button>
          </span>
        ))
      }
    </div>
  );
};

Stops.defaultProps = {
  stops: {},
};

export default Stops;
