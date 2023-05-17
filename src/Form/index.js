import { Formular, Fieldset, Legend, Label, Datafield } from "./styled";
import { useState, useRef } from 'react';
import Date from "./Date";
import { useApiData } from './useApiData';

const Form =
  ({ setResult }) => {
    const { currencies } = useApiData();
    console.log(currencies);
    const [addAmount, setAmount] = useState(10);
    const [currencyIn, currencyInValue] = useState(currencies.base);
    const [currencyOut, currencyOutValue] = useState(currencies.base);
    const inputRef = useRef(null);
    const focusInput = () => {
      inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
      event.preventDefault();
      const result = (+addAmount * +currencyIn / +currencyOut);
      const currencyOutName = currencies.find(currency => currency.value === +currencyOut);
      setAmount("");

      setResult({
        calculatedResult: result,
        currencyOutName: currencyOutName.name
      });
    };

    const switchCurrencies = () => {
      currencyInValue(currencyOut);
      currencyOutValue(currencyIn);
    };

    if (currencies.loading === "inProgress") {
      return (
        <Formular>Loading calculating engine, please wait!</Formular>
      );
    };

    if (currencies.loading === "error") {
      return (
        <Formular>An error has occured, please check it out:
          <br />
          {currencies.error}
        </Formular>
      );
    };

    if (currencies.loading === "success") {
      return (
        <Formular onSubmit={onFormSubmit}>
          <Date />
          <Fieldset>
            <Legend>Currency calculator</Legend>
            <Label>Amount
              <Datafield as="input"
                value={addAmount}
                onChange={({ target }) => setAmount(target.value)}
                className="form__input"
                type="number"
                min="1"
                step="any"
                ref={inputRef} />
            </Label>
            <Label>Currency
              <Datafield as="select" value={currencyIn}
                onChange={({ target }) => {
                  currencyInValue(target.value);
                }}>
                {currencies.rates.map((currency) => (
                  <option key={currency.id} value={currency.value}>
                    {currency.name}
                  </option>
                ))}
              </Datafield>
            </Label>
            <Label>Switch
              <Datafield button as="button"
                onClick={switchCurrencies}>
                &#8596;
              </Datafield>
            </Label>
            <Label>Exchange
              <Datafield as="select" value={currencyOut}
                onChange={({ target }) => {
                  currencyOutValue(target.value);
                }}>
                {currencies.rates.map((currency) => (
                  <option key={currency.id} value={currency.value}>
                    {currency.name}
                  </option>
                ))}
              </Datafield>
            </Label>
            <Label submitter>
              <Datafield button as="button"
                onClick={focusInput}>Calculate
              </Datafield>
            </Label>
          </Fieldset>
        </Formular >
      );
    };
  };

export default Form;
