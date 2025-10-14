/*
🔹 Problem: Prop Drilling
Kabhi-kabhi hume ek data Parent → Child → GrandChild → GreatGrandChild tak pass karna hota hai, 
even agar beech ke components usko use nahi kar rahe.
Isko bolte hain prop drilling (data ko unnecessary pass karna).
*/

import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <Child user="Nadeem" />
    </div>
  );
};

export default Parent;

// ==========================================

// 🔹 Solution: Context API
// Context API ek global storage banata hai jisme hum data rakh sakte hain aur koi bhi component usko directly access kar sakta hai, bina prop drilling ke.
