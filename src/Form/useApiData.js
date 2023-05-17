import { useState, useEffect } from "react";

const PUBLIC_API_URL = "123https://api.exchangerate.host/latest?base=PLN"

export const useApiData = () => {
  const [currencies, setCurrencies]
    = useState({ success: false, base: "", date: "", rates: [] });

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await fetch(PUBLIC_API_URL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        setCurrencies(await response.json());

      } catch (error) {
        setCurrencies({
          error: error.message,
          success: false
        });
      };
    };

    setTimeout(getCurrencies, 2500);
  }, []);

  return { currencies };
};
