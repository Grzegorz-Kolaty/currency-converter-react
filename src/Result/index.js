import "./style.css";

const Result = ({ title, result, currencyOut }) => {
  return (
    <div className="result">
      <h2>{title} {result} {currencyOut}</h2>
    </div>
  )
};

export default Result;