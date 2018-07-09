import React from 'react';
import { connect } from 'react-redux';

import { getAllStops } from 'src/store/rootSelectors';
import { changeStopsFilter } from 'src/store/settings/actions';
import Stops from './stops/stops';


const Filters = ({ render, ...props }) => {
  const stopsTitle = 'Количество пересадок';
  const child = <Stops {...props} />;
  return render(stopsTitle, child);
};

const mapStateToProps = state => ({
  stops: getAllStops(state),
});

export default connect(mapStateToProps, { changeStops: changeStopsFilter })(Filters);
