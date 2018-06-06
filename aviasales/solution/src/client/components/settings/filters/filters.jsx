import React from 'react';
import { connect } from 'react-redux';

/* eslint-disable import/no-unresolved, import/extensions */
import { getAllStops } from '~/store/selectors';
import { changeStopsFilter } from '~/store/settings/actions';
import Stops from './stops';
/* eslint-enable import/no-unresolved, import/extensions */


const Filters = ({ ...props }) => (
  <Stops {...props} />
);

const mapStateToProps = state => ({
  stops: getAllStops(state),
});

export default connect(mapStateToProps, { changeStops: changeStopsFilter })(Filters);
