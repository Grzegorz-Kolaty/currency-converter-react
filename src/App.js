import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Outcome from "./Outcome";
import Form from "./Form";


function App() {
  return (
    <Container>
      <Header title="Extraordinary Currency Converter" />
      <Section title="Convert" />
      <Form />
      <Section title="Outcome" />
      <Section title="Footer" />
    </Container>
  )
};

export default App;
