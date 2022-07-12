import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      throw new Error("Network Problem");
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { loading, data };
};
