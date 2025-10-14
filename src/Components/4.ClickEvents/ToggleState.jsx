import React, { useState } from "react";

const ToggleState = () => {
  const [on, setOn] = useState(true);

  const changeToggle = () => {
    setOn((prev) => !prev);
  };
  return (
    <div>
      <button onClick={changeToggle}>{on ? "ON" : "OFF"}</button>
    </div>
  );
};

export default ToggleState;


