import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link
  } from "react-router-dom";
  

const Navcomp = () => {
    return (
        <div>
            <Navbar bg="dark colour-white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link><Nav.Link className='Linkstyle' as={Link} to="/" >Home</Nav.Link></Link> 
           <Link><Nav.Link as={Link} to="/about" >About</Nav.Link></Link> 
            <NavDropdown title="Home Furniture" id="basic-nav-dropdown">
             <Link><NavDropdown.Item as={Link} to="/dining" >Dining</NavDropdown.Item></Link> 
              <Link><NavDropdown.Item as={Link} to="/Living" >
                Living
              </NavDropdown.Item></Link>
              <NavDropdown.Item as={Link} to="/bed" >
                Bed Room
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navcomp;