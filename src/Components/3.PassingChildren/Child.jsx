// function Child({ children }) {
//   return (
//     <>
//       <h1>{children}</h1>
//     </>
//   );
// }

// export default Child;

// ===================== 2.  =======================


// Child Component
function Child({ children }) {
  return (
    <div
      style={{
        backgroundColor: "gray",
        color: "white",
        padding: "20px",
        border: "5px solid red",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Child;
