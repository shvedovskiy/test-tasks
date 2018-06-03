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

export default StopsCheckbox;
