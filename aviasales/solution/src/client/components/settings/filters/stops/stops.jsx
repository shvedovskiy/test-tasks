import React from 'react';
import _ from 'lodash';

import StopsCheckbox from './stops-checkbox';


const Stops = ({ stops, changeStops }) => {
  function selectAllStops({ target }) {
    const newStops = _.mapValues(stops, () => target.checked);

    changeStops(newStops);
  }

  function selectStop({ target }) {
    changeStops({ [target.value]: target.checked });
  }

  function selectOnlyStop(value) {
    return () => {
      const newStops = _.mapValues(stops, (__, stop) => stop === value);
      changeStops(newStops);
    };
  }

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

export default Stops;
