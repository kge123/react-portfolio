import React, { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  const [page, setPage] = useState("Home");

  const render = () => {
    if (page === "Portfolio") {
      return <Portfolio />;
    }
    if (page === "Contact") {
      return <Contact />;
    } else {
      return <Home />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Navbar className="navbar" >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => setPage("Home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => setPage("Portfolio")}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setPage("Contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {render()}

      <Footer />
    </div>
  );
}

export default App;
