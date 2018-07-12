// @flow
import React from 'react';
import styled from 'styled-components';

import { pluralStop } from 'src/utils';
import plane from './plane.svg';
import type { LocationType } from '../types';


const FlightDetails = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Route = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px; 
`;

const Time = styled.span`
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 32px;
`;

const PathWithStops = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  margin-right: 20px;
  
  @media screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Stops = styled.div`
  height: 10px;
  margin-top: 3px;
  margin-bottom: 3px;
  color: #8b9497;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
`;

const Path = styled.div`
  display: flex;
  align-items: center;
`;

const PathLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #d2d5d6;
`;

const PathPlane = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  margin-left: 1px;
  background: url(${plane}) no-repeat center center;
`;

const Locations = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Location = styled.div`
  max-width: 50%;
`;

const LocationItem = styled.span`
  display: block;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Name = LocationItem.extend`
  font-weight: 600;
`;

const Date = LocationItem.extend`
  color: #8b9497;
`;
type Props = {|
  origin: LocationType,
  destination: LocationType,
  stops: string,
|};

const FlightDetailsContainer = ({ origin, destination, stops }: Props) => (
  <FlightDetails>
    <Route>
      <Time>{origin.time}</Time>
      <PathWithStops>
        <Stops>
          {stops === '0' ? '' : `${stops} ${pluralStop(stops)}`}
        </Stops>
        <Path>
          <PathLine />
          <PathPlane />
        </Path>
      </PathWithStops>
      <Time>{destination.time}</Time>
    </Route>
    <Locations>
      <Location>
        <Name>{origin.code}, {origin.name}</Name>
        <Date>{origin.date}</Date>
      </Location>
      <Location>
        <Name>{destination.name} {destination.code}</Name>
        <Date>{destination.date}</Date>
      </Location>
    </Locations>
  </FlightDetails>
);

export default FlightDetailsContainer;
