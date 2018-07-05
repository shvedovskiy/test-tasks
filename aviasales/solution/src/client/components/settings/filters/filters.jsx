import React from 'react';
import { connect } from 'react-redux';

/* eslint-disable import/no-unresolved, import/extensions */
import { getAllStops } from '~/store/rootSelectors';
import { changeStopsFilter } from '~/store/settings/actions';
import Stops from './stops';
/* eslint-enable import/no-unresolved, import/extensions */


const Filters = ({ render, ...props }) => {
  const stopsTitle = 'Количество пересадок';
  const child = <Stops {...props} />;
  return render(stopsTitle, child);
};

const mapStateToProps = state => ({
  stops: getAllStops(state),
});

export default connect(mapStateToProps, { changeStops: changeStopsFilter })(Filters);
