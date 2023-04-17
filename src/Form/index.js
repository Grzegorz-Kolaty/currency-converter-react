import "./style.css";

const Form =
  ({ setResult,
    addAmount,
    setAmount,
    currencyIn,
    currencyInValue,
    currencyOut,
    currencyOutValue,
    currencies }) => {

    const onFormSubmit = (event) => {
      event.preventDefault();
      const result = addAmount * currencyIn / currencyOut;
      setResult(result);
    };

    return (
      <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Currency calculator</legend>
          <label className="form__label">
            Amount
            <input
              value={addAmount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__input"
              name="form"
              type="number"
              min="1"
              step="any"
              placeholder="100"
              required
              autoFocus />
          </label>
          <label className="form__label">
            Currency
            <select
              className="form__select"
              value={currencyIn}
              onChange={({ target }) => currencyInValue(target.value)}
              required
            >
              {currencies.map((currency) => (
                <option
                  key={currency.id}
                  value={currency.value}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
          <label className="form__label">
            Switch
            <p className="form__select">&#8596;</p>
          </label>
          <label className="form__label">
            Exchange
            <select
              className="form__select"
              value={currencyOut}
              onChange={({ target }) => currencyOutValue(target.value)}
              required
            >
              {currencies.map((currency) => (
                <option
                  key={currency.id}
                  value={currency.value}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
          <button>Calculate</button>
        </fieldset>
      </form>
    )
  };

export default Form;