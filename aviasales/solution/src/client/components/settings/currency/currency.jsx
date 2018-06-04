import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

/* eslint-disable import/first, import/no-unresolved, import/extensions */
import CurrencyList from './currency-list';
import currencyService from '~/services/currency';
import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currency';
import { getCurrency } from '~/store/selectors';
import { changeCurrency } from '~/store/settings/actions';
/* eslint-enable import/first, import/no-unresolved, import/extensions */


class Currency extends Component {
  state = {
    isFetched: false,
  };

  componentDidMount() {
    currencyService.fetchCurrencies()
      .then(() => {
        this.setState({ isFetched: true });
      });
  }

  render() {
    let { currency, handleChangeCurrency } = this.props;
    const ratesNames = currencyService.getRatesNames();
    const aliases = _.pickBy(currencyAliases, value => ratesNames.includes(value));

    if (!aliases[currency]) {
      currency = RUSSIAN_ROUBLE;
    }

    return (
      <CurrencyList
        aliases={aliases}
        currency={currency}
        handleChangeCurrency={handleChangeCurrency}
      />
    );
  }
}

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

export default connect(mapStateToProps, { handleChangeCurrency: changeCurrency })(Currency);
