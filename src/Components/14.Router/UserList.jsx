import React from "react";
import { Link } from "react-router";

const UserList = () => {
  const userData = [
    { id: 1, name: "Nadeem" },
    { id: 2, name: "Adi" },
    { id: 3, name: "Uzair" },
    { id: 4, name: "Arham" },
    { id: 5, name: "Aayat" },
    { id: 6, name: "Saalba" },
    { id: 7, name: "Ayan" },
  ];
  return (
    <>
      <h1>User Data List</h1>

      {userData.map((item) => (
        <li className="ms-5">
          <Link to={"/users/" + item.id}>
            {item.id}: {item.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default UserList;
