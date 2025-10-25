import OtherMapPage from "./OtherMapPage";

// -----------------------------------------
function MapMethod() {
  let arr = ["a", "b", "c", "d", "e", "f"];

  let user = [
    { id: 1, name: "Nadeem" },
    { id: 2, name: "saqib" },
    { id: 3, name: "Saifi" },
  ];

  return (
    <>
      <h2>This is Map Methods </h2>
      <OtherMapPage arrProp={arr}></OtherMapPage>

      <div style={{ display: "flex", gap: "50px" }}>
        {user.map((item, id) => (
          <p key={id}>
            {item.id}. {item.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default MapMethod;
