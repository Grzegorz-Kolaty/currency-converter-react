import { useState, useEffect } from "react";
import axios from "axios";

const PUBLIC_API_URL = "https://api.exchangerate.host/latest?base=PLN";

export const useApiData = () => {
  const [currencies, setCurrencies] = useState({
    loading: "inProgress",
    base: "",
    date: "",
    rates: undefined
  });

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await axios.get(PUBLIC_API_URL);
        const { data } = response;
        setCurrencies({
          loading: "success",
          base: data.base,
          date: data.date,
          rates: Object.entries(data.rates).map(([name, value]) => ({ name, value })),
        });
      } catch (error) {
        setCurrencies({
          loading: "error",
          error: error
        });
      }
    };

    setTimeout(getCurrencies, 2500);
  }, []);

  return { currencies };
};
