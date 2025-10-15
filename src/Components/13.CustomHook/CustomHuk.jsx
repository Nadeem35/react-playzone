import useFetch from "./useFetch";

const CustomHuk = () => {
  // ✅ App.jsx

  function App() {
    const data = useFetch("https://dummyjson.com/products");

    return (
      <div>
        <h1>Products:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
};
export default CustomHuk;
