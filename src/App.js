import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";
import Form from "./Form";

function App() {
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
      <Form
        currencies={currencies} />
      <Result title="Exchange value:" />
      <Footer title="Copyright 2023 YouCode Industries" />
    </Container>
  )
};

export default App;
