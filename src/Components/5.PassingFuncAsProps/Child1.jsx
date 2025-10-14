// import React from "react";

// const Child1 = ({ onGreet }) => {
//   return (
//     <>
//       <button onClick={onGreet}>Say Hello !</button>
//     </>
//   );
// };

// export default Child1;

// ==================   🔹 2.  =================

// // Child.js

// import React from "react";

// const Child1 = ({ greeting }) => {
//   return (
//     <div>
//       <button onClick={() => greeting("I am data from Child!")}>
//         Send Data to Parent
//       </button>
//     </div>
//   );
// };

// export default Child1;

// =================  🔹 3.   =================


// Child.js
function Child1({ onUpdate }) {
  return (
    <>
      <button onClick={() => onUpdate("Nadeem")}>Send Name</button>
      <button onClick={() => onUpdate("Uzair")}>Send Another Name</button>
    </>
  );
}

export default Child1;
