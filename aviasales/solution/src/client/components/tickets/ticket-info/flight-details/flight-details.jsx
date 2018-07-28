// @flow
import React from 'react';

import { pluralStop } from 'src/utils';
import type { LocationType } from 'src/store/tickets/types';
import {
  FlightDetails,
  Route,
  Time,
  PathWithStops,
  Stops,
  Path,
  PathLine,
  PathPlane,
  Locations,
  Location,
  Name,
  Date,
} from './styled';


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
