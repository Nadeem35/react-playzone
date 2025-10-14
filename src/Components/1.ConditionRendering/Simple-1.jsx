// ------------  🟢 Step 2: Simple if Condition (inside JSX)  ------------

// import React from "react";

// function Simple() {
//   const isStudent = true;

//   return (
//     <>
//       {isStudent && <h1>Im Saifi Boy !</h1>}

//     </>
//   );
// }

// export default Simple;

// ------------🟢 Step 3: Ternary Operator ----------------

// import React from "react";

// function Simple() {
//   const isLogedIn = true

//   return (
//     <>{isLogedIn ? <h1>Welcome Back Bro !</h1> : <h1>LogIn kar yaar !</h1>}</>
//   );
// }

// export default Simple;

// -----------------  🟢 Step 4: Toggle with Button  -------------------

// import React, { useState } from "react";

// function Simple() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
//       <h1>{show && "Welcome Brother !"}</h1>
//     </>
//   );
// }

// export default Simple;

// -----------------  🟡 Example 5: Greeting Based on Time   ---------------------

// function Simple() {
//   const HRS = new Date().getDate();
//   // const HRS = new Date().getMilliseconds();
//   // const HRS = new Date().getMonth();
//   // const HRS = new Date().getUTCHours()
//   const isMorning = HRS < 12;

//   return (
//     <>
//       <h3>{HRS}</h3>
//       <h1>{isMorning ? "Good Morning 🌞" : "Good Evening 🌙"}</h1>
//     </>
//   );
// }

// export default Simple;

// --------  🟡 Example 6: Age Check  ---------
// import React from "react";

// function Simple() {
//   const age = 3;
//   const check = age > 12;
//   return (
//     <>
//       <h1>{check ? "You are adult." : "You are youger."}</h1>
//     </>
//   );
// }

// export default Simple;

// -------------  🟡 Example 7: Empty List Check   ----------------
// import React from "react";
// function Simple() {
//   // const fruits = ["Grapes", "Banana", "Orange", "Papaya"];
//   const fruits = [];
//   return (
//     <>
//       {fruits.length == 0 ? (
//         <h1>
//           No fruits available 🍽️ <br /> Please enter fruits...
//         </h1>
//       ) : (
//         <ul>
//           {fruits.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }
// export default Simple;

// --------------  🟡 Example 8: Show/Hide Password  ----------------

// import React, { useState } from "react";

// function Simple() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <input type={show ? "text" : "password"} placeholder="Enter password" />
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide password" : "Show Password"}
//       </button>
//     </>
//   );
// }

// export default Simple;

// --------------  🟡 Example 8: Check even odd number  ----------------

// import React, { useState } from "react";
// function Simple() {
//   const [num, setNum] = useState("");

//   console.log(num);

//   return (
//     <>
//       <input
//         type="num"
//         value={num}
//         onChange={(e) => setNum(e.target.value)}
//         placeholder="Enter any number"
//       />

//       {num && <h3>{num % 2 === 0 ? "Even number" : "Odd number"}</h3>}
//     </>
//   );
// }

// export default Simple;

// -------------- 🔴 Example 4: check Age Eligibility ----------------

// import React, { useState } from "react";

// function Simple() {
//   const [age, setAge] = useState("");

//   return (
//     <>
//       <input
//         type="num"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         placeholder="Enter your age..."
//       />
//       {age > 0 && (
//         <p>
//           {age >= 18
//             ? "You are Eligible for vote ✅"
//             : "You are not eligible ❌"}
//         </p>
//       )}
//     </>
//   );
// }

// export default Simple;

// ----------- 🔴 Example 4: Theme Switcher----------------

// import React, { useState } from "react";

// function Simple() {
//   const [dark, SetDark] = useState(true);

//   return (
//     <div
//       style={{
//         background: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//         height: "200px",
//         width: "200px",
//         border: "2px solid red",
//         borderRadius:"10px"
//       }}
//     >
//       <p>{dark ? "Dark Theme 🌙" : "Light Theme 🌞"}</p>
//       <button onClick={() => SetDark(!dark)}>Toggle theme</button>
//     </div>
//   );
// }

// export default Simple;

// =============  🔹 3. Hard Level  ==============
// ---------  Example 5: Role-based Dashboard  ----------

// import { useState } from "react";

// function Simple() {
//   const [role, SetRole] = useState("");

//   return (
//     <>
//       <h2>Select Role</h2>
//       <button onClick={() => SetRole("User")}>User</button>
//       <button onClick={() => SetRole("Admin")}>Admin</button>
//       <button onClick={() => SetRole("")}>LogOut</button>

//       {role === "User" && <h3>Welcome to User Dashboard 👤</h3>}
//       {role === "Admin" && <h3>Welcome to Admin Dashboard 🛠️</h3>}
//       {!role && <h3>Please login 🙏</h3>}
//     </>
//   );
// }
// export default Simple;

// -------  Example 6: API Data Rendering (Loading/Error/Success) -------
import React, { useState, useEffect } from "react";

function Simple() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/16")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading... ⏳</p>;
  if (error) return <p>Error fetching data ❌</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default Simple;
