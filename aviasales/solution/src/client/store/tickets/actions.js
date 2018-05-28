import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './consts';

import { isProd } from 'utils';
import {
  SERVER_HOSTNAME,
  SERVER_PORT,
  DEV_SERVER_PORT,
  HTTPS,
} from 'config';


export const fetchTickets = () => (dispatch) => {
  dispatch({
    type: FETCH_TICKETS_REQUEST
  });

  const url = isProd()
    ? `http${HTTPS ? 's' : ''}://${SERVER_HOSTNAME}:${SERVER_PORT}/api/tickets`
    : `http://localhost:${DEV_SERVER_PORT}/api/tickets`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { tickets } = data;
      dispatch({
        type: FETCH_TICKETS_SUCCESS,
        payload: { tickets },
      });
    })
    .catch((errResponse) => {
      dispatch({
        type: FETCH_TICKETS_FAILURE,
        payload: {
          errorMessage: errResponse,
        }
      });
    });
};

export const buyTicket = (id) =>  {
  // noop
};
