// @flow
import React from 'react';
import { mapValues } from 'lodash-es';

import { pluralStop } from 'src/utils';
import StopsCheckbox from './stops-checkbox/stops-checkbox';
import StopOnly from './stop-only/stop-only';
import { StopsList, StopsListItem, Label, LabelText } from './styled';

// eslint-disable-next-line no-underscore-dangle
function _selectAllStops(stops, changeStops) {
  return ({ currentTarget: { checked } }) => {
    const newStops = mapValues(stops, () => checked);

    changeStops(newStops);
  };
}

// eslint-disable-next-line no-underscore-dangle
function _selectStop(changeStops) {
  return ({ target: { value, checked } }) => {
    changeStops({ [value]: checked });
  };
}

// eslint-disable-next-line no-underscore-dangle
function _selectOnlyStop(stops, changeStops) {
  return newValue => () => {
    const newStops = mapValues(stops, (__, stop) => stop === newValue);
    changeStops(newStops);
  };
}

type Props = {|
  stops: {
    [stop: string]: boolean,
  },
  changeStops: ({ [stop: string]: boolean }) => any,
|};

const Stops = ({ stops, changeStops }: Props) => {
  const selectAllStops = _selectAllStops(stops, changeStops);
  const selectStop = _selectStop(changeStops);
  const selectOnlyStop = _selectOnlyStop(stops, changeStops);

  const checkedAll = Object.values(stops).every(v => v === true);

  return (
    <StopsList>
      <StopsListItem>
        <Label htmlFor="stops-all">
          <StopsCheckbox onChange={selectAllStops} checked={checkedAll} id="stops-all" />
          <LabelText>Все</LabelText>
        </Label>
      </StopsListItem>
      {Object.keys(stops).map((stop, idx) => (
        <StopsListItem key={stop}>
          <Label htmlFor={`stops-${idx}`}>
            <StopsCheckbox
              id={`stops-${idx}`}
              value={stop}
              checked={stops[stop]}
              onChange={selectStop}
            />
            <LabelText>{stop === '0' ? 'Без пересадок' : `${stop} ${pluralStop(stop)}`}</LabelText>
          </Label>
          <StopOnly handleSelect={selectOnlyStop(stop)} />
        </StopsListItem>
      ))}
    </StopsList>
  );
};

Stops.defaultProps = {
  stops: {},
};

export default Stops;
