import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrencyList from './currency-list';
import { getCurrency } from '~/store/selectors';
import { changeCurrency } from '~/store/settings/actions';


class Currency extends Component {
  render() {
    const { currency, changeCurrency } = this.props;
    return (
      <CurrencyList
        currency={currency}
        changeCurrency={changeCurrency}
      />
    );
  }
}

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

export default connect(mapStateToProps, { changeCurrency })(Currency);
