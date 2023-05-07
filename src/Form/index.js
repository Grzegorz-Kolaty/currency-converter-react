import { Formular, Fieldset, Legend, Label, Datafield } from "./styled";
import { useState } from 'react';
import { currencies } from './currencies';
import Date from "./Date";


const Form =
  ({ setResult }) => {
    const [addAmount, setAmount] = useState(10);
    const [currencyIn, currencyInValue] = useState(currencies[0].value);
    const [currencyOut, currencyOutValue] = useState(currencies[0].value);

    const onFormSubmit = (event) => {
      event.preventDefault();
      const result = (+addAmount * +currencyIn / +currencyOut);
      const currencyOutName = currencies.find(currency => currency.value === +currencyOut);

      setResult({
        calculatedResult: result,
        currencyOutName: currencyOutName.name
      });
    };

    const switchCurrencies = () => {
      currencyInValue(currencyOut);
      currencyOutValue(currencyIn);
    };

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
                {currencies.map((currency) => (
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
                {currencies.map((currency) => (
                  <option key={currency.id} value={currency.value}>
                    {currency.name}
                  </option>
                ))}
              </Datafield>
            </Label>
            <Label submitter>
              <Datafield button as="button">Calculate</Datafield>
            </Label>
          </Fieldset>
        </Formular>
    );
  };

export default Form;
