import { useState } from 'react';
import "./style.css";

const Form =
  ({ setResult, currencies }) => {
    const [addAmount, setAmount] = useState(10);
    const [currencyIn, currencyInValue] = useState(1);
    const [currencyOut, currencyOutValue] = useState(1);

    const onFormSubmit = (event) => {
      event.preventDefault();
      const result = (+addAmount * +currencyIn / +currencyOut);
      const currencyOutName = currencies.find(currency => currency.value === +currencyOut);
      setResult(`${result.toFixed(2)} ${currencyOutName.name}`);
    };

    const switchCurrencies = () => {
      currencyInValue(currencyOut);
      currencyOutValue(currencyIn);
    };

    return (
      <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Currency calculator</legend>
          <div className="form__fieldsetInputs">
            <label className="form__label">Amount
              <input
                value={addAmount}
                onChange={({ target }) => setAmount(target.value)}
                className="form__input"
                type="number"
                min="1"
                step="any"
                autoFocus />
            </label>
            <label className="form__label">Currency
              <select className="form__select" value={currencyIn}
                onChange={({ target }) => {
                  currencyInValue(target.value);
                }}>
                {currencies.map((currency) => (
                  <option key={currency.id} value={currency.value}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="form__label">Switch
              <button
                onClick={switchCurrencies}
                className="form__button">
                &#8596;</button>
            </label>
            <label className="form__label">Exchange
              <select className="form__select" value={currencyOut}
                onChange={({ target }) => {
                  currencyOutValue(target.value);
                }}>
                {currencies.map((currency) => (
                  <option key={currency.id} value={currency.value}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
            <button className="form__button">Calculate</button>
        </fieldset>
      </form >
    );
  };

export default Form;
