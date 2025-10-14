// src/components/Child.js
import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <>
      <h2>I am Child</h2>
      <GrandChild />
    </>
  );
}

export default Child;
