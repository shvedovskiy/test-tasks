// @flow
import React from 'react';

import {
  StopOnlyButton,
  Button,
} from './styled';


type Props = {|
  handleSelect: () => any,
|};

const StopOnly = ({ handleSelect }: Props) => {
  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      handleSelect();
    }
  };

  return (
    <StopOnlyButton>
      <Button onClick={handleSelect} onKeyDown={handleKeyDown}>Только</Button>
    </StopOnlyButton>
  );
};

export default StopOnly;
