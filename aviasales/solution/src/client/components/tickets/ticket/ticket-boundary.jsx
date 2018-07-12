// @flow
import * as React from 'react';


type Props = {|
  children: React.Node,
|};

type State = {|
  hasError: boolean,
|};

export default class TicketBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: any, info: any) {
    console.error(error, info); // eslint-disable-line no-console
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return '';
    }
    return this.props.children;
  }
}
