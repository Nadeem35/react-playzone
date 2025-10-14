// import React, { useCallback } from "react";

// const Memoization = () => {

//   const memoizedFunc = useCallback(() => {
//     console.log("Hello world");
//   }, []); // empty dependency → function will not change

//   return (
//     <>
//       <button onClick={memoizedFunc}>Click me</button>
//     </>
//   );
// };

// export default Memoization;

// // ------------2️⃣ Optimization / Performance-------------

// import { useState, useCallback } from "react";

// function Memoization() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => setCount((c) => c + 1), []);
////--- Agar increment bina useCallback ke hota, har render me new function banta, aur child component re-render hota.
//   function anotherIncr() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Counter</button>
//       <button onClick={anotherIncr}>noCallback</button>
//     </>
//   );
// }

// export default Memoization;

// ------------------3️⃣ Dependency Array ----------------

import { useCallback, useState } from "react";

const Memoization = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // // function tabhi update hoga jab count change ho
  return (
    <div>
      <h3>3️⃣ Dependency Array</h3>
      <h1>Increment: {count}</h1>
      <button onClick={increment}>CLick me</button>
    </div>
  );
};

export default Memoization;
