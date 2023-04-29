import { useEffect } from 'react';
import "./style.css";

const DateWithFormat = () => {
    const date = new Date();
    const dateAndTimeFormatted = date.toLocaleDateString("pl-PL",
        { weekday: "long", day: "numeric", month: "long" })
        + ", "
        + date.toLocaleTimeString("pl-PL");

    return (
        <div >
            <h2>{dateAndTimeFormatted}</h2>
        </div>
    );
};

export default DateWithFormat;