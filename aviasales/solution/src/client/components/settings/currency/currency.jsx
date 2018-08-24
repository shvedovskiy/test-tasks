// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import currencyService from 'src/services/currency';
import { RUSSIAN_ROUBLE, currencyAliases } from 'src/config/currency';
import { getCurrency } from 'src/store/rootSelectors';
import { changeCurrency } from 'src/store/settings/actions';
import type { State } from 'src/store/types';
import CurrencyList from './currency-list/currency-list';


type Props = {|
  selectedCurrency: string,
  handleChangeCurrency: Function,
|};

type CurrencyState = {|
  aliases: {
    [currencyName: string]: string,
  },
|};

export class Currency extends React.Component<Props, CurrencyState> {
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
    let { selectedCurrency } = this.props;
    const { handleChangeCurrency } = this.props;
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

const mapStateToProps = (state: State) => ({
  selectedCurrency: getCurrency(state),
});

export default connect(mapStateToProps, { handleChangeCurrency: changeCurrency })(Currency);
