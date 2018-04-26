import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import * as CounterActions from '~/actions';


class Counter extends Component {
  static initialAction() {
    return CounterActions.fetchCounterAction();
  }

  componentDidMount() {
    if (!this.props.counter) {
      this.props.fetchCounterAction(); // т.к. здесь привязали actions, вызываем не через props.dispatch()
    }
  }

  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;

    return (
      <div>
        <Link to="/">Home</Link> | <Link to="/news">Wizard News</Link>
        <p>
          Clicked: {counter || 0} times
          {' '}
          <button onClick={increment}>+</button>
          {' '}
          <button onClick={decrement}>-</button>
          {' '}
          <button onClick={incrementIfOdd}>increment if odd</button>
          {' '}
          <button onClick={() => incrementAsync()}>increment async</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CounterActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter));
