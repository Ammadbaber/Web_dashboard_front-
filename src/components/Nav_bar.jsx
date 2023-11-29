import React, { useState } from 'react';
import { Modal, Navbar, Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/images/logo.svg'
import '../App.css';
function Nav_bar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary nav-bar">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
            <img src={logo} alt='logo-img' className=''/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me">
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="">
                <Link to="/user">
                  User
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleShow}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Do you really wish to leave and logout? </Modal.Body>
        <Modal.Footer>
        <Link to="/login">
        <Button variant="success btn-modal" onClick={handleClose}>
            Yes, Log Out
          </Button>
        </Link>
          <Button variant="danger btn-modal" onClick={handleClose}>
            No, Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="sidebar"></div>
    </div>
  );
}

export default Nav_bar;
