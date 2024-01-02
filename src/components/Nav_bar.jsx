import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Modal, Navbar, Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link,useNavigate  } from 'react-router-dom';
import logo from '../../src/assets/images/logo.svg'
import '../App.css';
function Nav_bar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  const [apiData, setApiData] = useState([]);
    useEffect (()=>{
        const fetchData = async () => {
            try {
              const responses = await axios.get(`http://localhost:8082/profile/${userId}`);
              setApiData(responses.data);
              // Log the API response in the console
              console.log("API Responses  :", responses.data);
            } catch (error) {
              console.error("Error fetching data from the APIs  :", error);
            }
          };
          fetchData();
    },[userId]);



  const LogOut=()=>{

    localStorage.removeItem('token');

    handleShow();
    // Redirect to the login page or any other desired page
    navigate('/login');
  }


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
              <NavDropdown title={apiData.username} id="basic-nav-dropdown">
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
        <Button variant="success btn-modal" onClick={LogOut}>
            Yes, Log Out
          </Button>
        </Link>
          <Button variant="danger btn-modal" onClick={handleClose} >
            No, Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="sidebar"></div>
    </div>
  );
}

export default Nav_bar;
