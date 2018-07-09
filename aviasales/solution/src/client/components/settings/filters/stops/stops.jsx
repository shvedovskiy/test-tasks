import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import StopsCheckbox from './stops-checkbox/stops-checkbox';
import StopOnly from './stop-only/stop-only';
import { StopsListItem } from './common';
import { pluralStop } from '~/utils';


const StopsList = styled.ul`
  font-size: 13px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;

  &::after {
    content: '';
    height: 100%;
    width: 15px;
    position: absolute;
    top: 0;
    right: 15px;
    background: linear-gradient(90deg, rgba(255,255,255,0.001), #fff 85%);
  }

  ${StopsListItem}:hover &::after,
  ${StopsListItem}:focus &::after {
    background: linear-gradient(90deg, rgba(255,255,255,0.001), #f1fcff 85%);
  }
`;

const LabelText = styled.span`
  overflow: hidden;
`;

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
    <StopsList>
      <StopsListItem>
        <Label for="stops-all">
          <StopsCheckbox onChange={selectAllStops} checked={checkedAll} id="stops-all" />
          <LabelText>Все</LabelText>
        </Label>
      </StopsListItem>
      {Object.keys(stops).map((stop, idx) => (
          <StopsListItem key={stop}>
            <Label for={`stops-${idx}`}>
              <StopsCheckbox
                id={`stops-${idx}`}
                value={stop}
                checked={stops[stop]}
                onChange={selectStop}
              />
              <LabelText>
                { stop === '0' ? 'Без пересадок' : `${stop} ${pluralStop(stop)}`}
              </LabelText>
            </Label>
            <StopOnly onClick={selectOnlyStop(stop)} />
          </StopsListItem>
      ))}
    </StopsList>
  );
};

Stops.defaultProps = {
  stops: {},
};

export default Stops;
