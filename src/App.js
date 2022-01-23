import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        
      </Navbar>

      <Footer />
    </div>
  );
}

export default App;
