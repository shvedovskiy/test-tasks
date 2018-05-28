import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './consts';

import {
  HOSTNAME,
  PORT
} from '~/config';


export const fetchTickets = () => (dispatch) => {
  dispatch({
    type: FETCH_TICKETS_REQUEST
  });

  return fetch(`http://${HOSTNAME}:${PORT}/api/tickets/`)
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
