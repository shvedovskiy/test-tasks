import React from 'react';


const style = {
    padding: '16px'
};

export default ({ location }) => (
  <div style={style}>
    <h1>Sorry!</h1>
    <p>The page you requested was not found…</p>
    {
      location ? <p>(location.pathname)</p> : null
    }
  </div>
);
