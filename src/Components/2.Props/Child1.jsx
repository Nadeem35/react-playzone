// import React from "react";

// // This is our Child here data will be print thats coming from the parent component though the props
// const Child1 = (props) => {
//   return (
//     <div>
//       <h1>
//         Welcome {props.name}, Salute {props.greet}
//       </h1>
//     </div>
//   );
// };

// export default Child1;

// =================== 2.  =================

// import React from "react";

// const Child1 = ({user}) => {
//   return (
//     <>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//       <p>Course: {user.course}</p>
//     </>
//   );
// };

// export default Child1;

// =================== 3.  =================

// import React from "react";

// const Child1 = ({ user }) => {
//   return (
//     <>
//       {user.map((item, index) => (
//         <h3 key={index}>
//           Name: {item.name}, Age: {item.age} and Course: {item.course}
//         </h3>
//       ))}
//     </>
//   );
// };

// export default Child1;

// ===============  4.  ================

// // Child Component
// const Child1 = ({ handleButton }) => {
//   return (
//     <>
//       <button onClick={handleButton}>Click me</button>
//     </>
//   );
// };

// export default Child1;


// ==========================

// Child Component
function Child1({ message, isVisible }) {
  return isVisible ? <div style={{color: "red"}}>{message}</div> : null;
}

export default Child1
