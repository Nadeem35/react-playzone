// import { useState } from "react";

// export default function Form() {
//   const [text, setText] = useState("");

//   const submitData = (e) => {
//     e.preventDefault();
//     alert("Submited : " + text);
//   };

//   return (
//     <>
//       <form onSubmit={submitData}>
//         <input
//           value={text}
//           placeholder="enter text"
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }


// -----------------------

import React, { useState } from "react";

function Form() {
  const [data, setData] = useState("")

  const submit = (e) => {
    e.prevenDefault();
    alert("submit : " + data)
  }

  return (
    <>
      <form action="" onSubmit={submit}>

        <input value={data} placeholder="enter text"
          onChange={(e) => setData(e.target.value)}
        />
        <button type={submit}>Submit</button>
      </form>
    </>
  )
}

export default Form

