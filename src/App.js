import { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";
import Form from "./Form";

function App() {
  const [result, setResult] = useState("");
  const [addAmount, setAmount] = useState("10");
  const [currencyIn, currencyInValue] = useState("1");
  const [currencyOut, currencyOutValue] = useState("1");
  console.log(currencyOut);

  const currencies = [
    {
      id: 1,
      name: "PLN",
      value: 1
    },
    {
      id: 2,
      name: "EUR",
      value: 4
    },
    {
      id: 3,
      name: "USD",
      value: 3
    }
  ];

  return (
    <Container>
      <Header title="Currency connverter - just to make things easier!" />
      <Form setResult={setResult}
        addAmount={addAmount}
        setAmount={setAmount}
        currencyIn={currencyIn}
        currencyInValue={currencyInValue}
        currencyOut={currencyOut}
        currencyOutValue={currencyOutValue}
        currencies={currencies}
      />
      <Result title="Exchange value:" result={result} currencyOut={currencyOut} />
      <Footer title="Copyright 2023 YouCode Industries" />
    </Container>
  )
}

export default App;