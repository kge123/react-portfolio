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
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
       
        
      </Navbar>
      <Portfolio/>

      <Footer />

    </div>
  );
}

export default App;
