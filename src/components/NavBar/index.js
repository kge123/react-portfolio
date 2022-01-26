import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
