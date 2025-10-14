/*
“React me cleanup function ek return function hoti hai jo useEffect() ke andar likhi jaati hai.
Ye tab chalti hai jab component unmount hota hai ya effect dobara run hone wala hota hai.
Iska purpose hota hai unnecessary side effects (jaise timers, event listeners) ko remove karna
taaki performance aur memory dono safe rahe.”
*/

// import React, { useEffect } from "react";

// function CleanUp() {
//   useEffect(() => {
//     console.log("Im effect");

//     return () => {
//       console.log("Clean up function");
//     };
//   }, []);

//   return (
//     <>
//       <p>
//         Cleanup function ek aisi function hoti hai jo useEffect() ke andar likhi
//         jaati hai, aur component ke unmount hone ya re-render hone par side
//         effects ko remove karti hai. Isse memory leak aur unwanted behavior se
//         bachav hota hai.
//       </p>
//     </>
//   );
// }

// export default CleanUp;

// -------------- 🧠 5. Example 1 – Timer Cleanup ---------------

// import { useEffect } from "react";

// const CleanUp = () => {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Timer chal raha hai...");
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//       console.log("Timer band ho gaya!");
//     };
//   }, []);

//   return (
//     <div style={{ textAlign: "left" }}>
//       <dl>
//         <h4>➡️ Jab component destroy hota hai, timer band ho jaata hai ✅</h4>;
//         <dt>⏲️ Timer/Interval</dt>
//         <dd>clearInterval()</dd>
//         <dt>🖱️ Event Listener</dt>
//         <dd>removeEventListener()</dd>
//         <dt>🔌 API ya Socket Connection</dt>
//         <dd>unsubscribe() ya close()</dd>
//       </dl>
//     </div>
//   );
// };

// export default CleanUp;

// --------------------
import { useEffect } from "react";
function CleanUp() {
  useEffect(() => {
    const handleResize = () => console.log("Window resize hua!");
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Listener remove ho gaya!");
    };
  }, []);

  return (
    <>
      <h4>
        ➡️ Ye ensure karta hai ki har render par duplicate listeners na bane.
      </h4>
    </>
  );
}

export default CleanUp;
