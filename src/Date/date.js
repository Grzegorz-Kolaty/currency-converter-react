import { useEffect } from 'react';
import "./style.css";

const Date = () => {
    const dateAndTimeFormatted = date.toLocaleDateString("pl-PL",
        { weekday: "long", day: "numeric", month: "long" })
        + ", "
        + date.toLocaleTimeString("pl-PL");
    console.log(`Dzisiaj jest ${dateAndTimeFormatted}`)
};

export default Date;