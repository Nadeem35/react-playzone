// import { React } from "react";

// function InlineRendring() {
//   const students = [
//     { id: 1, name: "Saqib" },
//     { id: 2, name: "Nadeem" },
//     { id: 3, name: "Adi" },
//     { id: 4, name: "sanam" },
//   ];
//   return (
//     <>
//       {students.map((item, id) => (
//         <li key={id}>
//           {item.id}. {item.name}
//         </li>
//       ))}
//     </>
//   );
// }

// export default InlineRendring;


//---------------------------------

export function InlineRendring() {

  const arr = [
    { id: 1, name: "Saqib", College: "JMI" },
    { id: 2, name: "Nadeem", College: "AMU" },
    { id: 3, name: "Asif", College: "JNU" },
    { id: 3, name: "Adi", College: "JNU" },
    { id: 3, name: "Ayan", College: "IIT" },
    { id: 3, name: "Sarrogate", College: "JAM" },
    { id: 3, name: "PPP", College: "MANU" },
  ]

  return (
    <>{
      arr.map((item, index) => (
        <div className="w-25 h-25 bg-danger p-2 mb-2 d-inline-block opacity-80 rounded-3 text-light m-3" key={index}>
          <h2 className="m-1">Id: {item.id}</h2>
          <h2>{item.name}</h2>
          <h2>College: {item.College}</h2>
        </div>
      ))}
    </>
  )
}

export default InlineRendring
