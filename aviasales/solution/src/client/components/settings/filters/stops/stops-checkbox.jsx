import React from 'react';


const StopsCheckbox = ({children, ...rest }) => (
  <span>
    <label>
      {children}
      <input
        type="checkbox"
        {...rest}
      />
    </label>
  </span>
);

StopsCheckbox.defaultProps = {
  checked: false,
  value: '-1',
};

export default StopsCheckbox;
