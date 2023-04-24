import "./style.css";

const Result = ({ title, result }) => (
  <div className="result" >
    <h2>{title}
      {result.calculatedResult != null ? result.calculatedResult.toFixed(2) : ''}
      <b>&nbsp;{result.currencyOutName}</b></h2>
  </div>
);

export default Result;
