// import { useState } from "react";
import "./style.css";

const Form = () => {
  // const [currencyInput, onSelectCurrencyInput] = useState("Złoty");
  // const [currencyOutput, onSelectCurrencyOutput] = useState("Euro");
  // const [amount, setAmount] = useState("");

  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  // };

  return (
    <form className="js-form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency calculator</legend>
        <label className="form__label">
          Amount
          <input className="form__input" name="form" type="number" min="1" step="any" placeholder="1"
            required />
        </label>
        <label className="form__label">
          Currency
          <select className="form__select" type="select" required>
            <option value="1.00">PLN</option>
            <option value="4.82">EUR</option>
            <option value="4.96">USD</option>
          </select>
        </label>
        <label className="form__label">
          Switch
          <p className="form__select">&#8596;</p>
        </label>
        <label className="form__label">
          Exchange
          <select className="form__select" type="select"
            required>
            <option value="1.00">PLN</option>
            <option value="4.82">EUR</option>
            <option value="4.96">USD</option>
          </select>
        </label>
      </fieldset>
    </form>
  )
};

export default Form;