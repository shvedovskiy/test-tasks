// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getAllStops } from 'src/store/rootSelectors';
import { changeStopsFilter } from 'src/store/settings/actions';
import type { State } from 'src/store/types';
import Stops from './stops/stops';
import type { StopsType } from './types';


type Props = {|
  render: (string, React.Element<typeof Stops>) => React.Node,
  stops: StopsType,
  changeStops: Function,
|}

export const Filters = ({ render, stops, changeStops }: Props) => {
  const stopsTitle = 'Количество пересадок';
  const child = <Stops stops={stops} changeStops={changeStops} />;

  return render(stopsTitle, child);
};

const mapStateToProps = (state: State) => ({
  stops: getAllStops(state),
});

export default connect(mapStateToProps, { changeStops: changeStopsFilter })(Filters);
