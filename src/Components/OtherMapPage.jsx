import { React } from "react";

function OtherMapPage({ arrProp }) {
  return (
    <>
      <h1>Hi brothers</h1>
      {/* We can't use join inside the map because map returns new array while join convert whole array into sinle string */}
      {/* <p>{arrProp.join(", ")}</p> */}

      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        {arrProp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default OtherMapPage;
