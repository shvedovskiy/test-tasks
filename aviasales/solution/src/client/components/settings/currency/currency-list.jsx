import React from 'react';
import styled, { css } from 'styled-components';

import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currency'; // eslint-disable-line import/no-unresolved, import/extensions


const CurrencySwitcher = styled.div`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
`;

const SwitchButton = styled.span`
  flex-grow: 1;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: ${({ checked }) => checked ? '#2196f3' : '#fff'};
  border: 1px solid ${({ checked }) => checked ? '#2196f3' : '#d2d5d6'};
  color: ${({ checked }) => checked ? '#fff' : '#2196f3'};
  text-align: center;
  letter-spacing: .5px;
  transition: all .3s ease;
  cursor: pointer;
  z-index: ${({ checked }) => checked ? '3' : '1'};

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
  
  ${({ checked }) => !checked ? css`
    &:hover,
    &:focus {
       background-color: #f2fcff;
       border-color: #64b5f5;
       z-index: 2;
    }
  ` : ''}
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

function _handleItemChange(handleChangeCurrency) {
  return ({ target: { value }}) => {
    handleChangeCurrency(value);
  };
}

const CurrencyList = ({ selectedCurrency, aliases, handleChangeCurrency }) => {
  const handleItemChange = _handleItemChange(handleChangeCurrency);
  return (
    <CurrencySwitcher>
      {Object.keys(aliases).map(currencyName => {
        const checked = currencyName === selectedCurrency;
        const id = `${currencyName}-currency`;
        return (
          <SwitchButton key={currencyName} checked={checked}>
            <Radio
              id={id}
              value={currencyName}
              checked={checked}
              onChange={handleItemChange}
            />
            <RadioLabel htmlFor={id}>
              {aliases[currencyName]}
            </RadioLabel>
          </SwitchButton>
        );
      })}
    </CurrencySwitcher>
  );
};

CurrencyList.defaultProps = {
  currency: RUSSIAN_ROUBLE,
  aliases: {
    [RUSSIAN_ROUBLE]: currencyAliases[RUSSIAN_ROUBLE],
  },
};

export default CurrencyList;
