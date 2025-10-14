// import React from "react";
// import Child1 from "./Child1";

import Child1 from "./Child1";

// // This is our parent component we defind data here and send into the child component through the props

// const Parent1 = () => {
//   return (
//     <div>
//       <Child1 name={"Nadeem"} greet={"Good Morning"} />
//       <Child1 name={"Muzammil"} greet={"Good Evening"} />
//     </div>
//   );
// };

// export default Parent1;

// ================= 2.  ===================

// import React from "react";
// import Child1 from "./Child1";

// const Parent1 = () => {
//   const student = { name: "Nadeem", age: 23, course: "B. Tech" };
//   return (
//     <>
//       <Child1 user={student} />
//     </>
//   );
// };

// export default Parent1;

// ===============  3.  ================

// import React from "react";
// import Child1 from "./Child1";

// const Parent1 = () => {
//   const student = [
//     { name: "Nadeem", age: 23, course: "B. Tech" },
//     { name: "Uzair", age: 34, course: "MBBS" },
//   ];

//   return (
//     <>
//       <Child1 user={student} />
//     </>
//   );
// };

// export default Parent1;

// ===============  4.  ================

// // Parent Component
// const Parent1 = () => {
//   const showMessage = () => {
//     alert("Hello from Parent!");
//   };

//   return (
//     <>
//       <Child1 handleButton={showMessage} />
//     </>
//   );
// };

// export default Parent1;

//==================

// Parent Component
function Parent1() {
  return (
    <div>
      <Child1 message="Error: Something went wrong!" isVisible={true} />
      <Child1 message="Hidden Message" isVisible={false} />
    </div>
  );
}

export default Parent1;
