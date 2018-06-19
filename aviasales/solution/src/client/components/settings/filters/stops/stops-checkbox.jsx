import React from 'react';


const StopsCheckbox = ({children, id, ...rest }) => (
  <span>
    <input
      type="checkbox"
      id={`stops-${id}`}
      {...rest}
    />
    <label htmlFor={`stops-${id}`}>
      {children}
    </label>
  </span>
);

StopsCheckbox.defaultProps = {
  checked: false,
  value: '-1',
};

export default StopsCheckbox;
