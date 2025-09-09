import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]); // ✅ correct
      })
      .catch((err) => console.error("API Error:", err));
  }, [currency]);

  return data; // e.g. { inr: 83.24, eur: 0.91 }
}

export default useCurrencyInfo;
