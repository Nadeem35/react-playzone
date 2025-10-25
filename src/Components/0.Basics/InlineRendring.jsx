import { React } from "react";

function InlineRendring() {
  const students = [
    { id: 1, name: "Saqib" },
    { id: 2, name: "Nadeem" },
    { id: 3, name: "Adi" },
    { id: 4, name: "sanam" },
  ];
  return (
    <>
      {students.map((item, id) => (
        <li key={id}>
          {item.id}. {item.name}
        </li>
      ))}
    </>
  );
}

export default InlineRendring;
