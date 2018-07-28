// @flow
import React from 'react';

import {
  SwitchButton,
  Radio,
  RadioLabel,
} from './styled';


function _onChange(callback) { // eslint-disable-line no-underscore-dangle
  return ({ currentTarget: { value } }) => {
    callback(value);
  };
}

type Props = {|
  currencyName: string,
  checked: boolean,
  alias: string,
  handleChangeCurrency: (string) => any,
|};

const CurrencyButton = ({
  currencyName,
  checked,
  alias,
  handleChangeCurrency,
}: Props) => {
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
