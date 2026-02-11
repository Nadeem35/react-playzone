// ------------  🟢 Step 2: Simple if Condition (inside JSX)  ------------

// import React from "react";

// function Simple() {
//   const isStudent = true;

//   return <>{isStudent && <h1>I'm Saifi Boy!</h1>}</>;
// }

// export default Simple;

// ------------🟢 Step 3: Ternary Operator ----------------

// import React from "react";

// function Simple() {
//   const isLogedIn = true;

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

// --------  🟡 Example 6.1: Age Check taking input from the user ---------

// import React, { useState } from "react";

// const Simple = () => {
//   const [age, setAge] = useState("");

//   const adult = age > 18;
//   return (
//     <>
//       <h1 className="font-bold ">Check you are voter or not !</h1>
//       <input
//         type="text"
//         placeholder="Enter your age..."
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         className="border-2 rounded px-1"
//       />
//       <h1>
//         {age === ""
//           ? "Check your eligibility 🧐"
//           : adult
//           ? "Im eligible for vote 😎"
//           : "You are not eligible 😥"}
//       </h1>
//     </>
//   );
// };

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

// import { useState } from "react";

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

// --------------  🟡 Example 8.1: Show/Hide Password  ----------------
import React, { useState } from "react";

const Simple = () => {
  const [show, setHide] = useState(true);
  return (
    <div>
      <input
        type={show ? "password" : "show"}
        placeholder="Enter your password..."
        className="border-2 rounded-bl-sm rounded-tl-sm px-0.5"
      />
      <button
        onClick={() => setHide(!show)}
        className="bg-gray-500 text-white border-2 border-gray-800 px-1 border-l-0 "
        style={{ backgroundColor: "gray" }}
      >
        {/* {show ? " Hide" : "Show"} */}
        {/* {show ? "🙈" : "👁️"} */}
        {/* {show ? "👁️‍🗨️" : "👁️"} */}
        <span className="material-icons" style={{ fontSize: "18px" }}>
          {show ? "visibility_off" : "visibility"}
        </span>
      </button>
    </div>
  );
};

export default Simple;

// --------------  🟡 Example 8: Check even odd number  ----------------

// import React, { useState } from "react";
// function Simple() {
//   const [num, setNum] = useState("");

//   // console.log(num);

//   return (
//     <>
//       <h3 style={{ color: "black" }}>Check enterd number is even or odd.</h3>
//       <input
//         type="num"
//         value={num}
//         onChange={(e) => setNum(e.target.value)}
//         placeholder="Enter any number..."
//       />

//       {/* {num && <h3>{num % 2 === 0 ? "Even number" : "Odd number"}</h3>} */}
//       <h3 style={{ fontFamily: "cursive" }}>
//         {num === ""
//           ? "Enter any number"
//           : Number(num) % 2 === 0
//           ? "Even Number"
//           : "Odd Number"}
//       </h3>
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

// import { useState } from "react";

// function Simple() {
//   const [dark, SetDark] = useState(true);
//   const nadeem = {
//     theming: {
//       height: "200px",
//       width: "200px",
//       border: "2px solid red",
//       borderRadius: "10px",
//       background: dark ? "black" : "white",
//       color: dark ? "white" : "black",
//     },
//     btn: {
//       borderRadius: "5px ",
//       marginBottom: "30px",
//     },
//   };

//   return (
//     <>
//       <div style={nadeem.theming}>
//         <p style={{ color: dark ? "white" : "black" }}>
//           {dark ? "Light Theme 🌞" : "Dark Theme 🌙"}
//         </p>
//         <button onClick={() => SetDark(!dark)} style={nadeem.btn}>
//           {/* Toggle theme */}
//           {dark ? "Dark Theme 🌙" : "Light Theme 🌞"}
//         </button>
//       </div>
//     </>
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
// import React, { useState, useEffect } from "react";

// function Simple() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/16")
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading... ⏳</p>;
//   if (error) return <p>Error fetching data ❌</p>;

//   return (
//     <div>
//       <h2>{data.title}</h2>
//       <p>{data.body}</p>
//     </div>
//   );
// }

// export default Simple;
