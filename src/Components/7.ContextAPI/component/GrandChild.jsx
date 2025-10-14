// src/components/GrandChild.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function GrandChild() {
  const user = useContext(UserContext); // context se value nikalna

  return <h2>GrandChild User: {user}</h2>;
}

export default GrandChild;
