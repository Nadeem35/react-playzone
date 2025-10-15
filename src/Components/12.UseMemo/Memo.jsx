/*
🧩 Step 3: Samjho kya ho raha hai
Jab tum “Increment” button pe click karte ho → count badhta hai.
useMemo function chalega, aur double value calculate karega.
Console me print hoga: "Double number calculated!"
Jab tum input me type karte ho → sirf text change hota hai.
Lekin useMemo dobara nahi chalta, kyunki count nahi badla.
👉 Isse kya hua? React ne us calculation ko skip kar diya — performance better hui.
*/

import { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 👇 Expensive calculation
  const doubleNumber = useMemo(() => {
    console.log("Double number calculated!");
    return count * 2;
  }, [count]); // 👈 ye sirf tab chalega jab count badlega

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <h3>Double: {doubleNumber}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <br />
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
export default Memo;

//------------------------------
// import React from "react";

// const Memo = () => {
//   const [count, setCount] = useState(0);
//   const [dark, setDark] = useState(false);

//   // Expensive calculation
//   const expensiveValue = useMemo(() => {
//     console.log("Expensive calculation running...");
//     let num = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       num += 1;
//     }
//     return num + count;
//   }, [count]); // 👈 only re-run when 'count' changes

//   const themeStyle = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };

//   return (
//     <div style={themeStyle}>
//       <h2>Count: {count}</h2>
//       <h4>Expensive Value: {expensiveValue}</h4>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setDark(!dark)}>Toggle Theme</button>
//     </div>
//   );
// };

// export default Memo;
