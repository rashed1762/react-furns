import React from 'react';
import '../components/Cssfile/Nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assests/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link
  } from "react-router-dom";
  

const Navcomp = () => {
    return (
        <div>
            <Navbar className='navstyle'  expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
           <Link><Nav.Link className='linkstyle'  as={Link} to="/" >Home</Nav.Link></Link> 
           <Link><Nav.Link className='linkstyle' as={Link} to="/about" >About</Nav.Link></Link> 
            <NavDropdown title="Home Furniture" id="basic-nav-dropdown">
             <Link><NavDropdown.Item className='linkstyle' as={Link} to="/dining" >Dining</NavDropdown.Item></Link> 
              <Link><NavDropdown.Item className='linkstyle' as={Link} to="/Living" >
                Living
              </NavDropdown.Item></Link>
              <NavDropdown.Item className='linkstyle' as={Link} to="/bed" >
                Bed Room
              </NavDropdown.Item>
            </NavDropdown>
            <Link><Nav.Link className='linkstyle' as={Link} to="/contact" >Contact</Nav.Link></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navcomp;