// @flow
import React from 'react';
import styled from 'styled-components';


const StopsCheckboxContainer = styled.div`
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  width: 19px;
  height: 19px;
  margin-right: 6px;
  overflow: hidden;
  white-space: nowrap;
`;

const CheckboxTarget = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
`;

const CheckboxVisual = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 1px solid #d2d5d6;
  transition: all .2s ease;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 2px;
    background: #2196f3;
    border-radius: 1px;
    transition: top .2s ease-in-out, opacity .1s ease-in-out;
    opacity: 0;
  }
  
  &::before {
    left: 5px;
    width: 5px;
    transform: rotate(45deg);
  }
  
  &:after {
    left: 7px;
    width: 8px;
    transform: rotate(-45deg);
  }
  
  ${CheckboxTarget}:checked + & {
    border-color: #2196f3;
    background-color: #f2fcff;
  }
    
  ${CheckboxTarget}:focus + & {
    border-color: #2196f3;
  }
  
  ${CheckboxTarget}:checked:focus + & {
    background-color: #2196f3;
  }
  
  ${CheckboxTarget}:checked + &::before, 
  ${CheckboxTarget}:checked + &::after {
    opacity: 1;
  }
  
  ${CheckboxTarget}:checked:focus + &::before,
  ${CheckboxTarget}:checked:focus + &::after {
    background-color: #fff;
  }
  
  ${CheckboxTarget}:checked + &::before {
    top: 10px;
  }
  
  ${CheckboxTarget}:checked + &::after {
    top: 9px;
  }
`;

const StopsCheckbox = props => (
  <StopsCheckboxContainer>
    <CheckboxTarget {...props} />
    <CheckboxVisual />
  </StopsCheckboxContainer>
);

StopsCheckbox.defaultProps = {
  checked: false,
  value: '-1',
};

export default StopsCheckbox;
