import { useState, useEffect } from "react";
import { StyledDate } from "./styled";

const DateComponent = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const DateFormatted = (date) => (
    date.toLocaleDateString("pl-PL",
      {
        weekday: "long",
        day: "numeric",
        month: "long"
      })
    + ", "
    + date.toLocaleTimeString("pl-PL")
  );

  return (
      <StyledDate>Dzisiaj jest&nbsp;{DateFormatted(date)}</StyledDate>
  );
};

export default DateComponent;
