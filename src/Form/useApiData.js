import { useState, useEffect } from "react";

const PUBLIC_API_URL = "https://api.exchangerate.host/latest?base=PLN";

export const useApiData = () => {
  const [currencies, setCurrencies] = useState({
    base: "",
    date: "",
    rates: undefined,
    loading: "inProgress"
  });

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await fetch(PUBLIC_API_URL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setCurrencies({
          loading: "success",
          base: data.base,
          date: data.date,
          rates: Object.entries(data.rates).map(([name, value]) => ({ name, value })),
        });
      } catch (error) {
        setCurrencies({
          error: error.message,
          loading: "error"
        });
      };
    };

    setTimeout(getCurrencies, 2500);
  }, []);

  return { currencies };
};
