// Radio/index.js

import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Step 2: Use React.Children.map and React.cloneElement to clone the children
  const RadioOptions = React.Children.map(children, (child) => {
    // Clone each child and pass the correct props
    return React.cloneElement(child, {
      checked: child.props.value === selected, // Set checked based on selected value
      onChange: onChange, // Pass the onChange prop from RadioGroup
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Step 3: Hook up the onChange handler and pass the correct checked prop
  const handleChange = (e) => {
    // Call the onChange prop with the newly selected value
    onChange(e.target.value);
  };

  return (
    <div className="RadioOption">
      {/* Step 3: Pass the value, checked, and onChange props to the input element */}
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
