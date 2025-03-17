import { useState, useEffect } from "react";
import axios from "axios";

let cache: Record<string, any> = {};
let pendingRequests: Record<string, Promise<any>> = {};

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const refetch = () => {
    delete cache[url];
    delete pendingRequests[url];
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    if (!url) throw new Error("there is no provided URL");

    if (cache[url]) {
      setData(cache[url]);
      setLoading(false);
      return;
    }

    if (!!pendingRequests[url]) return;

    const fetchDataPromise = axios.get<T>(url);
    pendingRequests[url] = fetchDataPromise;

    fetchDataPromise
      .then((response) => {
        cache[url] = response.data;
        delete pendingRequests[url];
        setData(response.data);
      })
      .catch(() => {
        setError("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, refresh]);

  return { data, loading, error, refetch };
};

export default useFetch;
