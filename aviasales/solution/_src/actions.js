export const SET_COUNTER = 'SET_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const FETCH_GISTS_REQUEST = 'FETCH_GISTS_REQUEST';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_FAILURE = 'FETCH_GISTS_FAILURE';
export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_FAILURE = 'FETCH_COUNTER_FAILURE';


// COUNTER ACTIONS:

export const set = value => ({
    type: SET_COUNTER,
    payload: value
});

export const increment = () => ({
    type: INCREMENT_COUNTER
});

export const incrementIfOdd = () => (dispatch, getState) => {
    const { counter } = getState();
    if (counter % 2 === 0) {
        return;
    }
    dispatch(increment());
};

export const incrementAsync = (delay = 1000) => dispatch => {
    setTimeout(() => {
        dispatch(increment())
    }, delay);
};

export const decrement = () => ({
    type: DECREMENT_COUNTER
});

const requestCounter = () => ({
  type: FETCH_COUNTER_REQUEST
});

const receivedCounter = counter => ({
  type: FETCH_COUNTER_SUCCESS,
  payload: counter
});

const counterError = () => ({
  type: FETCH_COUNTER_FAILURE
});

export const fetchCounterAction = () => dispatch => {
  dispatch(requestCounter());
  return fetch('http://localhost:3000/api/counter')
    .then(response => response.json())
    .then(counter => dispatch(receivedCounter(counter)))
    .catch(err => dispatch(counterError(err)));
};


// NEWS ACTIONS:

const requestNews = () => ({
  type: FETCH_NEWS_REQUEST
});

const receivedNews = news => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news
});

const newsError = () => ({
  type: FETCH_NEWS_FAILURE
});

export const fetchNewsAction = () => dispatch => {
  dispatch(requestNews());
  return fetch('http://localhost:3000/api/news')
    .then(response => response.json())
    .then(news => dispatch(receivedNews(news)))
    .catch(err => dispatch(newsError(err)));
};


// GISTS ACTIONS:

const requestGists = () => ({
  type: FETCH_GISTS_REQUEST
});

const receivedGists = gists => ({
  type: FETCH_GISTS_SUCCESS,
  payload: gists
});

const gistsError = () => ({
  type: FETCH_GISTS_FAILURE
});

export const fetchGistsAction = () => dispatch => {
  dispatch(requestGists());
  return fetch('https://api.github.com/gists')
    .then(response => response.json())
    .then(gists => dispatch(receivedGists(gists)))
    .catch(err => dispatch(gistsError(err)));
};
