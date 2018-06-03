import React from 'react';


const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch tickets. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

FetchError.defaultProps = {
  message: '',
};

export default FetchError;