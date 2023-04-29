import "./style.css";

const Result = ({ title, result }) => (
  <div className="result">
    {title}
    {result.calculatedResult != null ? result.calculatedResult.toFixed(2) : ''}
    <b>&nbsp;{result.currencyOutName}</b>
  </div>
);

export default Result;
