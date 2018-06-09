import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

/* eslint-disable import/first, import/no-unresolved, import/extensions */
import CurrencyList from './currency-list';
import currencyService from '~/services/currency';
import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currency';
import { getCurrency } from '~/store/rootSelectors';
import { changeCurrency } from '~/store/settings/actions';
/* eslint-enable import/first, import/no-unresolved, import/extensions */


class Currency extends Component {
  state = {
    aliases: {
      [RUSSIAN_ROUBLE]: currencyAliases[RUSSIAN_ROUBLE],
    },
  };

  componentDidMount() {
    currencyService.fetchCurrencies()
      .then(() => {
        const ratesNames = currencyService.getRatesNames();
        const aliases = _.pickBy(currencyAliases, value => ratesNames.includes(value));

        this.setState({ aliases });
      })
      .catch(() => {});
  }

  render() {
    let { selectedCurrency, handleChangeCurrency } = this.props;
    const { aliases } = this.state;

    if (!aliases[selectedCurrency]) {
      selectedCurrency = RUSSIAN_ROUBLE;
    }

    return (
      <CurrencyList
        aliases={aliases}
        selectedCurrency={selectedCurrency}
        handleChangeCurrency={handleChangeCurrency}
      />
    );
  }
}

const mapStateToProps = state => ({
  selectedCurrency: getCurrency(state),
});

export default connect(mapStateToProps, { handleChangeCurrency: changeCurrency })(Currency);
