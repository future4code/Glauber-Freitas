import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true); // ativo a flag de loading
    axios
      .get(url)
      .then((res) => {
          console.log("Entrei", res.data)
          console.log("url", url)
        setData(res.data);
        setIsLoading(false); // desativo a flag de loading em caso de sucesso
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setIsLoading(false); // desativo a flag de loading em caso de falha
      });
  }, [url]);

  return [data, isLoading, error];
};
