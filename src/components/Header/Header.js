import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        // <nav className=' header'>
        //    <div>
        //      <img className='img fluid ' src={logo} alt="" />
        //     </div> 
        //     <div >
        //         <a className='' href="/order">Order</a>
        //         <a className='' href="/orderReview">Order Review</a>
        //         <a className='' href="/ManageInventory">Manage Inventory</a>
        //     </div>
        // </nav>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Image className='img fluid ' src={logo} alt="" />
        <Nav className=" justify-content-end">
          <Nav.Link href="#home">Order</Nav.Link>
          <Nav.Link href="#features">Order Review</Nav.Link>
          <Nav.Link href="#pricing">Manage Inventory</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;