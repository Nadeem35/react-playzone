import React, { useState } from "react";

function LogInLogOut() {
const [show, setShow] = useState(true);

  return (
      <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Text
      </button>
      {show && <p>This is a hidden message 👋</p>}
    </div>
  );
}

export default LogInLogOut;
