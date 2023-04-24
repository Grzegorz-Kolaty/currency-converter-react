import "./style.css";

const Result = ({ title, result }) => (
  <div className="result">
    <h2>{title} {result.calculatedResult.toFixed(2)} <b>{result.currencyOutName}</b></h2>
  </div>
);

export default Result;