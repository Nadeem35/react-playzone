import React from "react";
import Child1 from "../5.PassingFuncAsProps/Child1"


function Parent1() {

  const Msg = () => {
    alert("Parent component Alert !")
  }

  return (
    <>
      <h1>Im parent component</h1>
      <Child1 prop={Msg}></Child1>
    </>
  )
}
export default Parent1

// -==================   🔹 2.  ================
// 🔹 2. Passing Arguments to the Function
// Sometimes, you want the child to pass data back to the parent.

// // Parent.js
// import React from "react";
// import Child1 from "./Child1";

// const Parent1 = () => {
//   const showAlert = (msg) => {
//     alert(" Parent Received : " + msg);
//   };

//   return (
//     <div>
//       <Child1 greeting={showAlert}></Child1>
//     </div>
//   );
// };

// export default Parent1;


// =================  🔹 3.   =================

// // 🔹 3. Using State + Function Props
// // Parent wants to update its state based on child actions

// // Parent.js
// import { useState } from "react";
// import Child1 from "./Child1";

// function Parent1() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h2>Selected Name: {name}</h2>
//       <Child1 onUpdate={setName} />
//     </div>
//   );
// }

// export default Parent1;
