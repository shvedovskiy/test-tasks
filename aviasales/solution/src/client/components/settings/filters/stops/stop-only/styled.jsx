import styled from 'styled-components';

import { StopsListItem } from '../styled';


export const StopOnlyButton = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 15px;
  padding-right: 15px;
  background-color: var(--container-background);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -15px;
    width: 15px;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.001), var(--container-background) 85%);
  }

  ${StopsListItem}:hover &,
  ${StopsListItem}:focus-within & {
    background-color: var(--brand-light-blue);
  }

  ${StopsListItem}:hover &::before,
  ${StopsListItem}:focus-within &::before {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.001), var(--brand-light-blue) 85%);
  }
`;

export const Button = styled.a.attrs({
  role: 'button',
  tabIndex: '0',
})`
  display: block;
  position: relative;
  top: 25px;
  line-height: 36px;
  color: var(--brand-blue);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .35px;
  cursor: pointer;
  opacity: 0;
  transition: opacity .15s, top .15s ease-out;
  outline: none;


  &:hover,
  &:focus {
    color: var(--brand-orange);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px var(--brand-blue);
  }

  ${StopsListItem}:hover &,
  ${StopsListItem}:focus-within & {
    top: 0;
    opacity: 1;
  }
`;
