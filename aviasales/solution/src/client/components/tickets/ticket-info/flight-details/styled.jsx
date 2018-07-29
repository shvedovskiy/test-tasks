import styled from 'styled-components';

import plane from './plane.svg';


export const FlightDetails = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Route = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px; 
`;

export const Time = styled.span`
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 32px;
`;

export const PathWithStops = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  margin-right: 20px;
  
  @media screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Stops = styled.div`
  height: 10px;
  margin-top: 3px;
  margin-bottom: 3px;
  color: #8b9497;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
`;

export const Path = styled.div`
  display: flex;
  align-items: center;
`;

export const PathLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #d2d5d6;
`;

export const PathPlane = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  margin-left: 1px;
  background: url(${plane}) no-repeat center center;
`;

export const Locations = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Location = styled.div`
  max-width: 50%;
`;

export const LocationItem = styled.span`
  display: block;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Name = LocationItem.extend`
  font-weight: 600;
`;

export const Date = LocationItem.extend`
  color: #8b9497;
`;
