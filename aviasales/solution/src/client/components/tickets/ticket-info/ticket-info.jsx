// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import type { LocationType } from 'src/store/tickets/types';
import { carrierLogos as logos } from 'src/config/carriers';
import FlightDetailsContainer from './flight-details';


const TicketInfoContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(91, 137, 164, .25);
  transition: box-shadow .3s;
  
  &:hover,
  &:focus-within {
    box-shadow: 0 5px 25px rgba(91, 137, 164, .1), 0 10px 50px rgba(91, 137, 164, .25);
  }
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  ${css`
  & > div:first-child {
    flex-basis: 200px;
    flex-shrink: 0;
    
    @media screen and (max-width: 590px) {
      flex-grow: 1;
    }
  }`}
  
  & > div:last-child {
    flex-basis: 320px;
    flex-grow: 1;
    flex-shrink: 0;
    margin-bottom: 20px;
  }
  
  ${({ transitionName }) => css`
    &.${transitionName}-appear,
    &.${transitionName}-enter {
      transform: translateY(-15px);
      opacity: 0.01;
    }
    
    &.${transitionName}-appear.${transitionName}-appear-active,
    &.${transitionName}-enter.${transitionName}-enter-active {
      transform: translateY(0px);
      opacity: 1;
      transition: all .2s ease-in;
    }
        
    &.${transitionName}-leave {
      transform: translateY(0px);
      opacity: 1;
    }
        
    &.${transitionName}-leave.${transitionName}-leave-active {
      transform: translateY(15px);
      opacity: 0.01;
      transition: all .2s ease-in;
    }
  `}
`;

const TicketSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 20px;
  border-right: 1px solid #eceff1;
  
  @media screen and (max-width: 590px) {
    border-right: 0;
    border-bottom: 1px solid #eceff1;
  }
  
  & > div:first-child {
    flex-basis: 200px;
    flex-grow: 1;
  }
  
  & > div:last-child {
    flex-basis: 200px;
    flex-grow: 1;
  }
`;

const CarrierLogo = styled.img.attrs({
  src: ({ logo }) => logo[0],
  srcSet: ({ logo }) => `${logo[0]} 1x, ${logo[1]} 2x, ${logo[2]} 3x`,
})`
  display: block;
  margin: 0 auto 20px;
  max-height: 35px;
`;

type Props<T> = T & {|
  children: React.Node,
  carrier: string,
  origin: LocationType,
  destination: LocationType,
  stops: string,
|};

function TicketInfo<T: *>({ children, carrier, ...props }: Props<T>) {
  return (
    <TicketInfoContainer transitionName="tickets">
      <TicketSide>
        <div>
          <CarrierLogo logo={logos[carrier]} alt={carrier} />
        </div>
        <div>
          {children}
        </div>
      </TicketSide>
      <FlightDetailsContainer {...props} />
    </TicketInfoContainer>
  );
}

export default TicketInfo;
