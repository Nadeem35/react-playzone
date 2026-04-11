// import React from "react";
// import Child1 from "../5.PassingFuncAsProps/Child1"

import { useState } from "react"
import Child1 from "./Child1";


// function Parent1() {

//   const Msg = () => {
//     alert("Parent component Alert !")
//   }

//   return (
//     <>
//       <h1>Im parent component</h1>
//       <Child1 prop={Msg}></Child1>
//     </>
//   )
// }
// export default Parent1

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
//       <h2>Parent Component</h2>
//       <Child1 greeting={showAlert}></Child1>
//     </div>
//   );
// };

// export default Parent1;

// ------------------

// import React from "react";
// import Child1 from "./Child1";

// function Parent1() {

//   function ShowMsg() {
//     alert("Im alert message of Parent inside the Child")
//   }

//   return (
//     <>
//       <h1>This is Parents component content</h1>
//       <Child1 props={ShowMsg} />
//     </>
//   )
// }

// export default Parent1


// =================  🔹 3.   =================

// // 🔹 3. Using State + Function Props
// // Parent wants to update its state based on child actions

// // Parent.js
// import { useState } from "react";
// import Child1 from "./Child1";

// function Parent1() {
//   const [name, setName] = useState("Saifi");

//   return (
//     <div>
//       <h3>Selected Name: {name}</h3>
//       <Child1 onUpdate={setName} />
//     </div>
//   );
// }

// export default Parent1;

//--------------------------

function Parent1() {

  const [name, setName] = useState("Student");

  return (
    <>
      <h3>My name is : {name}</h3>
      <Child1 updatename={setName} />
    </>
  )
}

export default Parent1

