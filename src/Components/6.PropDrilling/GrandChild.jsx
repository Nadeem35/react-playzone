import React from "react";
import GrandChild from "./GreatGrandChild";

const GreatGrandChild = ({ user }) => {
  return (
    <div>
      <GrandChild user={user} />
    </div>
  );
};

export default GreatGrandChild;
