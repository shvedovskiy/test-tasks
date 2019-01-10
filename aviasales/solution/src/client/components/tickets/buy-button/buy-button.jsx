// @flow
import * as React from 'react';

import { splitPrice } from 'src/utils';
import { BuyButtonContainer, BuyButtonText } from './styled';

type Props = {|
  children: string,
  buyClick: (event?: SyntheticEvent<HTMLButtonElement>) => void,
|};

const BuyButton = ({ children, buyClick }: Props) => (
  <BuyButtonContainer onClick={buyClick} tabIndex="0">
    <BuyButtonText>
      Купить
      <br />
      за {splitPrice(children)}
    </BuyButtonText>
  </BuyButtonContainer>
);

BuyButton.defaultProps = {
  buyClick() {
    // noop
  },
};

export default BuyButton;
