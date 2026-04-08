import { useState } from "react";
import Child from "./Child";

/*
"useCallback ek hook hai jo function ko memorize karta hai, taaki wo har render me naya na bane — isse 
unnecessary child re-renders aur performance issues avoid hote hain, especially jab React.memo use karte hain."
*/

// function Parent() {
//   const [count, setCount] = useState(0);

//   // ❌ This function is recreated on every render
//   const handleClick = () => {
//     console.log("Button clicked!");
//   };
//   console.log("Parent rendered!");

//   return (
//     <>
//       <h3>Parent</h3>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <Child onClick={handleClick} />
//     </>
//   );
// }

// export default Parent;



function Parent() {
  const [count, setCount] = useState(0);
  // const [down, setDown] = useState(count)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>

      {/* <h1>{down}</h1> */}
      <button onClick={decrement}>-1</button>
    </>
  )
}
export default Parent

