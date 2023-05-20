import { Formular, Loader, Error, Fieldset, Legend, Label, Datafield } from "./styled";
import { useState } from 'react';
import Date from "./Date";
import { useApiData } from './useApiData';

const Form =
  ({ setResult }) => {
    const { currencies } = useApiData();
    const [amount, setAmount] = useState(10);
    const [currencyIn, currencyInValue] = useState(1);
    const [currencyOut, currencyOutValue] = useState(1);

    const onFormSubmit = (event) => {
      event.preventDefault();
      const result = amount * (currencyOut / currencyIn);

      setResult({
        calculatedResult: result,
        currencyOutName: currencies.rates.find(currency => currency.value === +currencyOut),
        ratesDate: currencies.date
      });
    };

    const switchCurrencies = () => {
      currencyInValue(currencyOut);
      currencyOutValue(currencyIn);
    };

    const refreshPage = () => {
      window.location.reload(false);
    }

    if (currencies.loading === "inProgress") {
      return (
        <Loader />
      );
    };

    if (currencies.loading === "error") {
      return (
        <Error>
          <i>An error has occurred, please check it out:</i><br />
          Error type: <b>{currencies.error.name}</b><br />
          Error content: <b>{currencies.error.message}</b>
          <Datafield as="button" onClick={refreshPage}>Try Again!</Datafield>
        </Error>
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
                value={amount}
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
              <Datafield button as="button"
                onClick={onFormSubmit}>
                Calculate
              </Datafield>
            </Label>
          </Fieldset>
        </Formular>
      );
    };
  };

export default Form;
