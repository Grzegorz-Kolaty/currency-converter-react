import { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";
import Form from "./Form";
import Date from "./Date";

function App() {
  const [result, setResult] = useState("");

  return (
    <Container>
      <Header title="Currency connverter - just to make things easier!" />
      <Form setResult={setResult} />
      <Date title="Dzisiaj jest " />
      <Result title="Exchange value: " result={result} />
      <Footer title="Copyright 2023 YouCode Industries" />
    </Container>
  )
};

export default App;