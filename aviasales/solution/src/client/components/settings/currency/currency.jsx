// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import currencyService from 'src/services/currency';
import { RUSSIAN_ROUBLE, currencyAliases } from 'src/config/currency';
import { getCurrency } from 'src/store/rootSelectors';
import { changeCurrency } from 'src/store/settings/actions';
import CurrencyList from './currency-list/currency-list';


type Props = {|
  selectedCurrency: string,
  handleChangeCurrency: Function,
|};

type State = {|
  aliases: {
    [currencyName: string]: string,
  },
|};

class Currency extends React.Component<Props, State> {
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

const mapStateToProps = state => ({
  selectedCurrency: getCurrency(state),
});

export default connect(mapStateToProps, { handleChangeCurrency: changeCurrency })(Currency);
