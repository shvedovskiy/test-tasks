// @flow
import * as React from 'react';

import type { LocationType } from 'src/store/tickets/types';
import { carrierLogos as logos } from 'src/config/carriers';
import FlightDetailsContainer from './flight-details/flight-details';
import {
  TicketInfoContainer,
  TicketSide,
  CarrierLogoPicture,
  CarrierLogo,
  CarrierLogoSource,
} from './styled';


type Props<T> = T & {|
  children: React.Node,
  carrier: string,
  origin: LocationType,
  destination: LocationType,
  stops: string,
|};

function TicketInfo<T: *>({ children, carrier, ...props }: Props<T>) {
  const logo: Array<string> = logos[carrier];
  return (
    <TicketInfoContainer transitionName="tickets">
      <TicketSide>
        <CarrierLogoPicture>
          <CarrierLogoSource as="source" logo={logo} />
          <CarrierLogo logo={logo} alt={carrier} />
        </CarrierLogoPicture>
        <div>
          {children}
        </div>
      </TicketSide>
      <FlightDetailsContainer {...props} />
    </TicketInfoContainer>
  );
}

export default TicketInfo;
