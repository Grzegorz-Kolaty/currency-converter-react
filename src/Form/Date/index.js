import { useCurrentDate } from "./useCurrentDate";
import { StyledDate } from "./styled";

const dateFormatted = (date) => {
  return date.toLocaleDateString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long"
  })
    + ", "
    + date.toLocaleTimeString("pl-PL");
};

const DateComponent = () => {
  const { date } = useCurrentDate();

  return (
    <StyledDate>Dzisiaj jest&nbsp;{dateFormatted(date)}</StyledDate>
  );
};

export default DateComponent;
