import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping, faMagnifyingGlass, faPerson } from '@fortawesome/free-solid-svg-icons'
import '../components/Cssfile/Nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assests/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link, NavLink
  } from "react-router-dom";
  import {  useCart } from "react-use-cart";
 
  
  

const Navcomp = () => {
  const {
    totalItems,
   
  } = useCart();
    return (
        <div>
            <Navbar className='navstyle '  expand="lg"  >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt=""  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">

            <NavLink className="linkstyle"> <Nav.Link   as={Link} to="/" >Home </Nav.Link></NavLink>
           <NavLink className="linkstyle"><Nav.Link  as={Link} to="/about" >About</Nav.Link></NavLink> 
            <NavDropdown  title= "Home Furniture" id="basic-nav-dropdown">
             <NavLink className="linkstyle"><NavDropdown.Item   as={Link} to="/dining" >Dining</NavDropdown.Item></NavLink> 
              <NavLink className="linkstyle"><NavDropdown.Item  as={Link} to="/Living" >
                Living
              </NavDropdown.Item></NavLink>
              <NavDropdown.Item  as={Link} to="/bed" >
                Bed Room
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="linkstyle"><Nav.Link  as={Link} to="/contact" >Contact</Nav.Link></NavLink> 
          </Nav>

          <Nav>
          <NavLink className="linkstyle"><Nav.Link  as={Link} to="/search" ><FontAwesomeIcon className='iconcart' icon={faMagnifyingGlass} /></Nav.Link></NavLink>
          <NavLink className="linkstyle"><Nav.Link  as={Link} to="/login" ><FontAwesomeIcon className='iconcart' icon={faPerson} /></Nav.Link></NavLink>
          <div>
           <div>
          
           <NavLink className="linkstyle"><Nav.Link className='linkstyle' as={Link} to="/cart" ><FontAwesomeIcon className='iconcart' icon={faCartShopping} /> <span className='cart-total ' >{totalItems}</span> </Nav.Link></NavLink>
            </div> 
          
          </div>
          
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navcomp;