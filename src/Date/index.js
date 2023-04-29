import { useState, useEffect } from "react";
import "./style.css";

const DateComponent = ({ title }) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [setDate]);

  return (
    <div className="date">{title}
      {date.toLocaleDateString("pl-PL", {
        weekday: "long",
        day: "numeric",
        month: "long"
      })}, {date.toLocaleTimeString("pl-PL")}
    </div>
  );
};

export default DateComponent;
