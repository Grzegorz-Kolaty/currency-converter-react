import { useState } from 'react';
import { Container } from "./Container/styled";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";
import Form from "./Form";

function App() {
  const [result, setResult] = useState("");

  return (
    <Container>
      <Header title="Currency connverter - just to make things easier!" />
      <Form setResult={setResult} />
      <Result title="Exchange value: " result={result} />
      <Footer title="Copyright 2023 YouCode Industries" />
    </Container>
  )
};

export default App;