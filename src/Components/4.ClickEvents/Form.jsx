import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    alert("Submited : " + text);
  };

  return (
    <>
      <form onSubmit={submitData}>
        <input
          value={text}
          placeholder="enter text"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
