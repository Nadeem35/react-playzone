import React from "react";

function Child1({ prop }) {

  return (
    <>
      <h2>Im child content</h2>
      <button onClick={prop}>Click child</button>
    </>
  )

}

export default Child1;

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


// // Child.js
// function Child1({ onUpdate }) {
//   return (
//     <>
//       <button onClick={() => onUpdate("Nadeem")}>Send Name</button>
//       <button onClick={() => onUpdate("Uzair")}>Send Another Name</button>
//     </>
//   );
// }

// export default Child1;
