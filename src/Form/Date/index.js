import { useState, useEffect } from "react";
import "./style.css";

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
    <div className="date">
      <span>Dzisiaj jest&nbsp;{DateFormatted(date)}</span>
    </div>
  );
};

export default DateComponent;
