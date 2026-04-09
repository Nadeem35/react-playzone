// import React, { useState } from "react";

import { useState } from "react";

// const ToggleState = () => {
//   const [on, setOn] = useState(true);

//   const changeToggle = () => {
//     setOn((prev) => !prev);
//   };
//   return (
//     <div>
//       <button onClick={changeToggle}>{on ? "ON" : "OFF"}</button>
//     </div>
//   );
// };

// export default ToggleState;

// ----------------------
function ToggleState() {
  const [prev, setPrev] = useState(true)

  function changer() {
    setPrev(!prev)
  }


  return (
    <>
      <button onClick={changer}>{prev ? "ON" : "OFF"}</button>
      <br />
    </>
  )
}

export default ToggleState