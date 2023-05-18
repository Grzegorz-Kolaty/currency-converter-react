import { Summary } from "./styled";

const Result = ({ title, result }) => (
  <Summary>
    {title}
    {result.calculatedResult != null ? result.calculatedResult.toFixed(2) : ""}
    <b>&nbsp;{result.currencyOutName != null ? result.currencyOutName.name : ""}</b>
  </Summary>
);

export default Result;
