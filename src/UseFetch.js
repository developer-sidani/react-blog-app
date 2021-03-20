import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [is_Pending, setIs_Pending] = useState("Loading...");
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Error 404!! Cannot Find Items.");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Aborted!!");
          } else {
            setIs_Pending(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, is_Pending };
};

export default UseFetch;
