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
  
  & > :first-child {
    flex-basis: 200px;
    flex-grow: 1;
  }
  
  & > :last-child {
    flex-basis: 200px;
    flex-grow: 1;
  }
`;

const CarrierLogoPicture = styled.picture`
  margin-bottom: 20px;
`;

const CarrierLogo = styled.img.attrs({
  src: ({ logo }) => `${logo[0]}.png`,
  srcSet: ({ logo }) => `${logo[0]}.png 1x, ${logo[1]}.png 2x, ${logo[2]}.png 3x`,
})`
  display: block;
  margin: 0 auto;
  max-height: 35px;
`;

const CarrierLogoSource = CarrierLogo.withComponent('source').extend.attrs({
  src: null,
  srcSet: ({ logo }) => `${logo[0]}.webp 1x, ${logo[1]}.webp 2x, ${logo[2]}.webp 3x`,
  type: 'image/webp',
})``;

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
          <CarrierLogoSource logo={logo} />
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
