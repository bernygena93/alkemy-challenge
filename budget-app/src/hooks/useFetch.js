import React, { useEffect, useState } from "react";

function useFetch(urlApi, payload, header) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      try {
        const info = await urlApi(payload, header);
        setData(info.data);
      } catch (err) {
        console.error("error al realizar el pedido", err);
      }
    }
    fetchApi();
    console.log("estoy ejecutandome");
  }, [urlApi, header, payload]);

  return data;
}

export default useFetch;
