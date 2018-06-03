import React from 'react';
import _ from 'lodash';

import StopsCheckbox from './stops-checkbox';


function _selectAllStops(stops, changeStops) {
  return ({ target: { checked }}) => {
    const newStops = _.mapValues(stops, () => checked);

    changeStops(newStops);
  }
}

function _selectStop(changeStops) {
  return ({ value, target: { checked }}) => {
    changeStops({ [value]: checked });
  }
}

function _selectOnlyStop(stops, changeStops) {
  return (value) => () => {
    const newStops = _.mapValues(stops, (__, stop) => stop === value);
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
      <StopsCheckbox onSelect={selectAllStops} checked={checkedAll}>All</StopsCheckbox>
      {
        Object.keys(stops).map(stop => (
          <span key={stop}>
            <StopsCheckbox
              onSelect={selectStop}
              checked={stops[stop]}
              value={stop}
            >
              {stop} stop(s)
            </StopsCheckbox>
            <button onClick={selectOnlyStop(stop)}>
              Only {stop}
            </button>
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
