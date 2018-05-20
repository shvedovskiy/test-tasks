import React from 'react';


export default ({ error, timedOut, pastDelay }) => {
    if (error) {
        return <h1>Loading error</h1>;
    } else if (timedOut) {
        return <h1>Taking a long time...</h1>;
    } else if (pastDelay) {
        return <h1>Loading...</h1>;
    }
    return null;
};
