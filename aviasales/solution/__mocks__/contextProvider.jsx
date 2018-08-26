const context = 'Russian Rouble';

export const CurrencyContext = { // eslint-disable-line import/prefer-default-export
  Consumer(props) {
    const { children } = props;
    return children(context);
  },
};
