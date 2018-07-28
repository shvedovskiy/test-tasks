// @flow
import * as React from 'react';

import { Header, Logo } from './styled';


class Head extends React.Component<{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Header>
        <Logo href="/" title="Homepage" aria-label="Logo picture" />
      </Header>
    );
  }
}

export default Head;
