import { Formular, Fieldset, Legend, Label, Datafield } from "./styled";
import { useState } from 'react';
import Date from "./Date";
import { useApiData } from './useApiData';

const Form =
  ({ setResult }) => {
    const { currencies } = useApiData();
    console.log(currencies);
    const [addAmount, setAmount] = useState(10);
    const [currencyIn, currencyInValue] = useState(1);
    const [currencyOut, currencyOutValue] = useState(1);

    const onFormSubmit = (event) => {
      event.preventDefault();
      const result = (+addAmount * +currencyIn / +currencyOut);
      setAmount("");

      setResult({
        calculatedResult: result,
        currencyOutName:
          currencies.rates.find(currency => currency === +currencyOut)
          || "PLN"
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
                step="any" />
            </Label>
            <Label>Currency
              <Datafield as="select" value={currencyIn}
                onChange={({ target }) => {
                  currencyInValue(target.value);
                }}>
                {(currencies.rates).map((currencyIn, index) => (
                  <option key={index} value={currencyIn.value}>
                    {currencyIn.name}
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
                {(currencies.rates).map((currencyOut, index) => (
                  <option key={index} value={currencyOut.value}>
                    {currencyOut.name}
                  </option>
                ))}
              </Datafield>
            </Label>
            <Label submitter>
              <Datafield button as="button">
                Calculate
              </Datafield>
            </Label>
          </Fieldset>
        </Formular >
      );
    };
  };

export default Form;
