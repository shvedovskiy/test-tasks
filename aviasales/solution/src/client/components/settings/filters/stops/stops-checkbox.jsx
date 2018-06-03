import React from 'react';


const StopsCheckbox = ({children, value, checked, onSelect }) => (
  <span>
    <label>
      {children}
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onSelect}
      />
    </label>
  </span>
);

StopsCheckbox.defaultProps = {
  checked: false,
  value: -1,
};

export default StopsCheckbox;
