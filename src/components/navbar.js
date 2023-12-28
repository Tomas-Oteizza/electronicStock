import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar className="navbar">
        <Nav>
            <Nav.Link as={Link} to="/" className="navlink">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/addItem">
              Add Item
            </Nav.Link>
          </Nav>
    </Navbar>
  );
}




 
