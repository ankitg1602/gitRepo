import React from "react";
import './index.css'

export default (props) => {
  return (
    <select className="filter select_button">
      <option value="" hidden>
        {props.placeholder}
      </option>
      {props.options.map(label => <option value={label}>{label}</option>)}
    </select>
  );
};
