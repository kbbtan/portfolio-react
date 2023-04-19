// This component acts as the wrapper component for all pages.
// Includes navbar.
import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/" className="navbar-brand">kbbtan</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/projects" className="nav-link">Projects</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className="nav-link">Contact</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet/>
    </>
  );
}

export default App;
