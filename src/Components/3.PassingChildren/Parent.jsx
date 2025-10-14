import Child from "./Child";

// function Parent() {
//   return (
//     <>
//       <Child>Hi, How are you</Child>
//       <Child>I am Fine</Child>
//     </>
//   );
// }

// export default Parent;

// ===================== 2.  =======================


// Parent Componet
function Parent() {
  return (
    <>
      <Child>
        <h1>Biodata</h1>
        <h3>Name: Mohd Nadeem</h3>
        <h3>Age: 23</h3>
        <h3>Profile: SDE</h3>
      </Child>

      <Child>
        <h1>Job Description:</h1>
        <h3>Senior software developer at Google</h3>
      </Child>
    </>
  );
}

export default Parent;
