// ✅ useFetch.js
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [url]);

  return data; // 👈 custom hook kuch bhi return kar sakta hai
}

export default useFetch;
