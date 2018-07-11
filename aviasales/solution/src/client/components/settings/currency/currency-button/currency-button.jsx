// @flow
import React from 'react';
import styled, { css } from 'styled-components';


const SwitchButton = styled.span`
  flex-grow: 1;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: ${({ checked }) => (checked ? '#2196f3' : '#fff')};
  border: 1px solid ${({ checked }) => (checked ? '#2196f3' : '#d2d5d6')};
  color: ${({ checked }) => (checked ? '#fff' : '#2196f3')};
  text-align: center;
  letter-spacing: .5px;
  transition: all .3s ease;
  cursor: pointer;
  outline: none;
  z-index: ${({ checked }) => (checked ? '3' : '1')};

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  
  &:not(:first-child) {
    margin-left: -1px;
  }
  
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  &:focus-within {
     box-shadow: inset 0 0 0 1px #fff;
  }
  
  ${({ checked }) => (!checked ? css`
    &:hover {
       background-color: #f2fcff;
       border-color: #64b5f5;
       z-index: 2;
    }
  ` : '')}
`;

const Radio = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
`;

const RadioLabel = styled.label`
  z-index: 1;
`;

function _onChange(callback) { // eslint-disable-line no-underscore-dangle
  return ({ target: { value } }) => {
    callback(value);
  };
}

const CurrencyButton = ({
  currencyName,
  checked,
  alias,
  handleChangeCurrency,
}) => {
  const onChange = _onChange(handleChangeCurrency);
  const id = `${currencyName}-currency`;

  return (
    <SwitchButton checked={checked}>
      <Radio
        id={id}
        name="currency"
        value={currencyName}
        checked={checked}
        onChange={onChange}
      />
      <RadioLabel htmlFor={id}>
        {alias}
      </RadioLabel>
    </SwitchButton>
  );
};

export default CurrencyButton;
