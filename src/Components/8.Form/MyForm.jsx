// //✅ Isme input hamesha React state ke under control hai, isliye ise Controlled Form kehte hain.
// // 1. Controlled Form


// import { useState } from "react";

// const MyForm = () => {
//   const [name, setName] = useState("");

//   const formSubmit = (e) => {
//     e.preventDefault();
//     alert(`Form Submitted : ${name}`);
//   };
//   console.log(name);

//   return (
//     <>
//       <form onSubmit={formSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default MyForm;

//-----------------------
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("")

  const uploaded = (e) => {
    // its use for the remain text inside the input field.
    e.preventDefault()
    alert(`Submitted : ${name}`)
  }
  console.log(name)

  return (
    <>
      <form action="" onSubmit={uploaded}>
        <input type={name} placeholder="Enter anything..."
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default MyForm


// // // --------------------  2. Uncontrolled Form -------------------

// import { useRef } from "react";
// function MyForm() {
//   const nameRef = useRef();

//   const dataSubmit = (e) => {
//     // onSubmit={dataSubmit} me by default form refresh ho jata hai.
//     // Isliye hamesha e.preventDefault() use karna chahiye.
//     e.preventDefault();

//     alert(`Data Submitted : ${nameRef.current.value}`);
//   };
//   return (
//     <>
//       <form onSubmit={dataSubmit}>
//         <input type="text" placeholder="Enter text" ref={nameRef} />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default MyForm;
