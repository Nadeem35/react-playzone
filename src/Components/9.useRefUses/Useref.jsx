/*
1. Accessing DOM Elements
React me directly document.getElementById() use karna best practice nahi hai.
Iske liye hum useRef use karte hai.
*/

// import React, { useRef } from "react";

// const Useref = () => {
//   const inputRef = useRef();

//   const inputFocus = () => {
//     inputRef.current.focus();
//   };

//   console.log(inputRef);

//   return (
//     <>
//       <input type="text" ref={inputRef} placeholder="Enter name" />
//       <button onClick={inputFocus}>Submit</button>
//     </>
//   );
// };

// export default Useref;

// ------------------------

/*
2. Storing Values Without Re-render
useState me value change hone par component re-render hota hai.
      Agar hume value store karni hai bina re-render ke → useRef use karte hai.
      */

// import { useRef, useState } from "react";

// function Useref() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);
//   renderCount.current = renderCount.current + 1;

//   return (
//     <>
//       <h2>Clicked : {count}</h2>
//       <h2>Component Rendered: {renderCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Count</button>
//     </>
//   );
// }

// export default Useref;

// ----------------------------

// import { useEffect, useRef, useState } from "react";

// function Useref() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <>
//       <h2>Current: {count}</h2>
//       <h2>Previous: {prevCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </>
//   );
// }

// export default Useref;

// ---------------  4. Storing Timers / Intervals  -----------------

/*
Agar tum setInterval ya setTimeout use karte ho, toh 
uska id store karne ke liye useRef perfect hai.
*/

import { useRef, useState } from "react";

function Useref() {
  const [time, setTime] = useState(0);
  const timeRef = useRef();

  const starTimer = () => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
  };

  return (
    <>
      <h2>Timer: {time}</h2>
      <button onClick={starTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}
export default Useref;
