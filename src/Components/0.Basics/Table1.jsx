import ForienMap from "./Table2";

function Table1() {
  const employees = [
    { id: 101, name: "John", department: "HR", salary: 45000 },
    { id: 102, name: "Aisha", department: "IT", salary: 60000 },
    { id: 103, name: "Kabir", department: "Finance", salary: 52000 },
  ];
  const students = [
    { id: 1, name: "Ayan", roll: 11 },
    { id: 2, name: "Nadeem", roll: 22 },
    { id: 3, name: "Sana", roll: 33 },
    { id: 4, name: "Rizwan", roll: 44 },
  ];

  return (
    <>
      <h1 className="text-3xl text-fuchsia-700">Forein Table Student data</h1>
      <ForienMap arrProp={students} />

      <h1 className="text-4xl text-amber-800">Same the file data</h1>
      <table className="border-2">
        <thead>
          <tr className="px-5">
            <th className="border-2 border-amber-300 ">ID</th>
            <th className="border-2 border-amber-300 ">Name</th>
            <th className="border-2 border-amber-300 ">Department</th>
            <th className="border-2 border-amber-300 ">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => (
            <tr>
              <td className="border-2 border-amber-300  px-3">{item.id}</td>
              <td className="border-2 border-amber-300  px-3">{item.name}</td>
              <td className="border-2 border-amber-300  px-3">
                {item.department}
              </td>
              <td className="border-2 border-amber-300  px-3">{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table1;
