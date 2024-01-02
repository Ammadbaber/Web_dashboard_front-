import React from "react";
import axios from "axios";
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import * as yup from 'yup';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../src/assets/images/811665656486sliders.webp";
import logo from "../src/assets/images/logo.svg";
import doc2 from "../src/assets/images/doc-2.jpg";
import doc3 from "../src/assets/images/doc-3.jpg";
import doc4 from "../src/assets/images/doc-4.jpg";
import {useNavigate } from "react-router-dom";
import Slider from "react-slick";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/assets/home.css";

const Home = () => {
  const navigate = useNavigate();

  /**
    * Design a schema for creating contact us Field with form validations.
    *
    * Author:
    * Date: October 30, 2023
    */
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email is Required')
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email Format'),
    name: yup
      .string()
      .required('User name is required'),

      message: yup
      .string()
      .required('message is required'),
  });

  // They are part of the schema, form management and validation logic for Login field
  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Use yupResolver for schema validation
  });

  const onSubmit =async (data) => {

    try {

    const response=await axios.post("http://localhost:8082/contactus",data)
    console.log(response.data);
      reset()
    } catch (error) {

    }
  };

  // State to store data fetched from the API

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className="banner_content">
        <header className="main-header">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="home">
                <img src={logo} alt="logo-img" className="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about_us">About-Us</Nav.Link>
                  {/* <Nav.Link href="#link">Login</Nav.Link> */}
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    href=""
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <div className="banner bg-blue">
          <Container>
            <Row className="d-flex align-center">
              <Col>
                <div className="">
                  <h2>Why wait For a</h2>
                  <h3>Doctor?</h3>
                  <Button className="primary btn-primary btn">
                    Get treated now
                  </Button>{" "}
                </div>
              </Col>
              <Col>
                <img src={img1} alt="banner-img" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <main>
        <section className="aboutus" id="about_us">
          <Container>
            <div className="about-us-content">
              <h2> About-Us</h2>
              <h3>WHO WE ARE</h3>
              <p>
                The CareMD is a telemedicine company that provides a simple and
                helpful way for our patients to engage with their medical care
                providers distantly from the solace of their homes. We are
                focused on broadening the choice of permitting our patients to
                assume responsibility for their health through virtual means of
                medical care. Our team is involved comprised of compassionate
                medical services providers, IT specialists, and Engineers.
                Together we structure a group that presents to you with total
                medical care services that is convenient and affordable.
              </p>
              <h3>MEET OUR TEAM</h3>
            </div>
            <Slider {...settings}>
              <div className="phone_slider">
                <img src={doc3} alt="logo-img" className="" />
                <h3>Lorem Ipsum</h3>
              </div>
              <div className="phone_slider">
                <img src={doc2} alt="logo-img" className="" />
                <h3>Lorem Ipsum</h3>
              </div>
              <div className="phone_slider">
                <img src={doc3} alt="logo-img" className="" />
                <h3>Lorem Ipsum</h3>
              </div>
              <div className="phone_slider">
                <img src={doc4} alt="logo-img" className="" />
                <h3>Lorem Ipsum</h3>
              </div>
            </Slider>
          </Container>
        </section>
        <section className="contact-us">
          <Container>
            <div className="contact-us">
              <h1> Contact-Us</h1>
              <Form autoComplete="off" className="form-group contact_us_form" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter User name" {...register('name')} />
                      {errors.username && <span className='eroor'>{errors.username.message}</span>}
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        {...register('email')}
                      />
                      {errors.email && <span className='eroor'>{errors.email.message}</span>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="write Your message"
                    {...register('message')}
                     />
                     {errors.message && <span className='eroor'>{errors.message.message}</span>}
                  </Form.Group>
                </Row>
                <Button className="primary btn-primary btn" type="submit">
                    Send Message
                  </Button>{" "}
              </Form>
            </div>
          </Container>
        </section>

      </main>

      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Home;
