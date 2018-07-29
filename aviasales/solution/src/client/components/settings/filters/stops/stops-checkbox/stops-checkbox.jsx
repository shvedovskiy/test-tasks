// @flow
import * as React from 'react';

import {
  StopsCheckboxContainer,
  CheckboxTarget,
  CheckboxVisual,
} from './styled';


type Props = {
  id: string,
  checked: boolean,
  value: string,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => any,
};

const StopsCheckbox = (props: Props) => (
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
