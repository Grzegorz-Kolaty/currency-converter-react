import { useState } from "react";
import "./style.css";

const Form = () => {
  const [currencyInput, onSelectCurrencyInput] = useState("Złoty");

  const [currencyOutput, onSelectCurrencyOutput] = useState("Euro");


  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
      />
      <select
        value={currencyInput}
        onChange={({ target }) => onSelectCurrencyInput(target.value)}>
        <option value="4">Euro</option>
        <option value="3">Dollars</option>
        <option value="1">Złoty</option>
      </select>
      <select
        value={currencyOutput}
        onChange={({ target }) => onSelectCurrencyOutput(target.value)}>
        <option>Euro</option>
        <option>Dollars</option>
        <option>Złoty</option>
      </select>
      <button>Calculate!</button>
    </form>
  )
};

export default Form;