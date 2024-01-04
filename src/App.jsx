import { Container } from "react-bootstrap";
import HomePage from "./components/templates/homePage";
import Header from "./components/templates/header";

function App() {

  return (
    <>
      <Container >
        <Header />
        <HomePage />
      </Container>
    </>
  );
}

export default App
