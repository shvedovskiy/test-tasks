import React  from 'react';
import { connect } from 'react-redux';

/* eslint-disable import/first, import/no-unresolved, import/extensions */
import CurrencyList from './currency-list';
import { getCurrency } from '~/store/selectors';
import { changeCurrency } from '~/store/settings/actions';
/* eslint-enable import/first, import/no-unresolved, import/extensions */


const Currency = ({ currency, handleChangeCurrency }) => (
  <CurrencyList
    currency={currency}
    handleChangeCurrency={handleChangeCurrency}
  />
);

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

export default connect(mapStateToProps, { handleChangeCurrency: changeCurrency })(Currency);
