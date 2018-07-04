import React from 'react';
import styled from 'styled-components';

import FlightDetailsContainer from './flight-details';


const TicketInfoContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(91, 137, 164, .25);
  transition: box-shadow .3s;
  
  &:hover {
    box-shadow: 0 5px 25px rgba(91, 137, 164, .1), 0 10px 50px rgba(91, 137, 164, .25);
  }
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const TicketSide = styled.div`
  flex-basis: 200px;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 25px 20px;
  border-right: 1px solid #eceff1;
  
  @media screen and (max-width: 590px) {
    flex-grow: 1;
    border-right: 0;
    border-bottom: 1px solid #eceff1;
  }
`;

const Carrier = styled.div`
  flex-basis: 200px;
  flex-grow: 1;
`;

const CarrierLogo = styled.img`
  display: block;
  margin: 0 auto 20px;
`;

const BuyTicket = styled.div`
  flex-basis: 200px;
  flex-grow: 1;
`;

const TicketInfo = ({children, carrierName, carrierLogo, ...props }) => (
  <TicketInfoContainer>
    <TicketSide>
      <Carrier>
        <CarrierLogo src={`/carriers/${carrierLogo}.png`} alt={carrierName} />
      </Carrier>
      <BuyTicket>
        {children}
      </BuyTicket>
    </TicketSide>
    <FlightDetailsContainer {...props} />
  </TicketInfoContainer>
);

export default TicketInfo;
