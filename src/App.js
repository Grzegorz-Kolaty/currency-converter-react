import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Outcome from "./Outcome";
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
  ]
  return (
    <Container>
      <Header />
      <Form
        currencies={currencies} />
      <Outcome />
      <Footer />
    </Container>
  )
};

export default App;
