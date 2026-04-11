// function Child1({ prop }) {

//   return (
//     <>
//       <h2>We are child component</h2>
//       <button onClick={prop}>Child Click button</button>
//     </>
//   )
// }

// export default Child1

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

// ------------------

// function Child1({ props }) {

//   return (
//     <>
//       <h1>I am Child Component</h1>
//       <button onClick={props}>Child Submit</button>
//     </>
//   )
// }

// export default Child1


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

//--------------------------

function Child1({ updatename }) {

  return (
    <>
      <button onClick={() => updatename("Topper")}> Previos</button> {"    __________     "}
      <button onClick={() => updatename("Developer")}> Now</button>
    </>
  )
}

export default Child1

