// import { React, useEffect } from "react";

// const Rendering = () => {
//   useEffect(() => {
//     console.log("Rednering!");
//     // here component will run after every render
//   });

//   return (
//     <>
//       <h1>Rendering</h1>
//     </>
//   );
// };

// export default Rendering;

// -----------------  Default behavior   -------------------

// import { useEffect, useState } from "react";

// ("use strickt");

// function Rednering() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Counter render!");
//   }, []);

//   return (
//     <>
//       <h1>Counter: {count + 1}</h1>
//       <button onClick={() => setCount(count + 1)}>Click me {count}</button>
//     </>
//   );
// }

// export default Rednering;

// ----------------   With Dependency array  --------------

// import { useEffect, useState } from "react";

// function Rendering() {
//   const [count, setCount] = useState(0);

//   // sirf ek baar run karega
//   useEffect(() => {
//     console.log("Component mounted");
//   }, []);

//   // count change hone par run karega
//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]);
//   return (
//     <>
//       <h1>Name: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }

// export default Rendering;

// ------------- 4️⃣ Multiple useEffect hooks ----------------

// import { React, useEffect, useState } from "react";

// function Rendering() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Saifi");

//   useEffect(() => {
//     // setCount(count + 1);
//     console.log(count + 1);
//   }, [count]);
//   //   Count change → sirf count effect run

//   useEffect(() => {
//     console.log("Entered text :" + name);
//   }, [name]);
//   // Name change → sirf name effect run

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <br />
//       <h2>Name: {name}</h2>
//       <input
//         type="text"
//         placeholder="enter name"
//         onChange={(e) => setName(e.target.value)}
//       />
//     </>
//   );
// }

// export default Rendering;

// ----------------- 5️⃣ Cleanup function ------------------
// --------- Kuch side effects ko cleanup karna padta hai (jaise event listeners, timers)
import { React, useEffect } from "react";

function Rendering() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interrval cleared");
    };
  }, []);
  // Component unmount hote hi cleanup chalega

  return (
    <>
      <h1>Render component</h1>
    </>
  );
}

export default Rendering;
