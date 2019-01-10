// @flow
import * as React from 'react';

import { Header, Logo } from './styled';


export default class Head extends React.Component<{}> {
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
