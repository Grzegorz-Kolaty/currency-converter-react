import { Summary } from "./styled";

const Result = ({ title, result }) => {
  if (result.calculatedResult != null)
    return (
      <Summary>
        {title}
        {result.calculatedResult.toFixed(2)}
        <b>&nbsp;{result.currencyOutName.name}</b>
        <br />
        <i>
          Rates from the European Central Bank
          <br />
          Up to date {result.ratesDate}
        </i>
      </Summary>
    );
}

export default Result;
