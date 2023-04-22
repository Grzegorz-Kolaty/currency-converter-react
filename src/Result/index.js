import "./style.css";

const Result = ({ title, result }) => {
  return (
    <div className="result">
      <h2>{title} <b>{result}</b></h2>
    </div>
  )
};

export default Result;