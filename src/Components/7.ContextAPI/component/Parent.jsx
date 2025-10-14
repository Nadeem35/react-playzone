// src/components/Parent.js
import React from "react";
import { UserContext } from "../context/UserContext";
import Child from "./Child";

function Parent() {
  return (
    <UserContext.Provider value={"Nadeem"}>
      <Child />
    </UserContext.Provider>
  );
}

export default Parent;


