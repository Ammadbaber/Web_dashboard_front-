import React, { useCallback } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../src/assets/images/811665656486sliders.webp';
import logo from '../src/assets/images/logo.svg'
import doc1 from '../src/assets/images/doc-1.jpg'
import doc2 from '../src/assets/images/doc-2.jpg'
import doc3 from '../src/assets/images/doc-3.jpg'
import doc4 from '../src/assets/images/doc-4.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/assets/home.css'


const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  //   $('.nav a').on('click', function(event){
  //     event.preventDefault();

  //     $('html, body').animate({
  //         scrollTop: $( $.attr(this, 'href') ).offset().top
  //     }, 500);
  // });




  return (
    <div>
      <section className="banner_content">
        <header className='main-header'>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="home">
                <img src={logo} alt='logo-img' className='' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about_us">

                    About-Us

                  </Nav.Link>
                  {/* <Nav.Link href="#link">Login</Nav.Link> */}
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="" onClick={() => { navigate("/login") }}>Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <div className="banner bg-blue">
          <Container>
            <Row className='d-flex align-center' >
              <Col>
                <div className=''>
                  <h2>
                    Why wait For a
                  </h2>
                  <h3>Doctor?</h3>

                  <Button className="primary btn-primary btn">Get treated now</Button>{' '}
                </div>
              </Col>
              <Col>
                <img src={img1} alt='banner-img' />
              </Col>
            </Row>
          </Container>

        </div>
      </section>

      <main>
        <section className="aboutus" id='about_us'>
          <Container>
          <div className='about-us-content'>
            <h2> About-Us</h2>
            <h3>
              WHO WE ARE
            </h3>
            <p>
              The CareMD is a telemedicine company that provides a simple and helpful way for our patients to engage with their medical care providers distantly from the solace of their homes. We are focused on broadening the choice of permitting our patients to assume responsibility for their health through virtual means of medical care. Our team is involved comprised of compassionate medical services providers, IT specialists, and Engineers. Together we structure a group that presents to you with total medical care services that is convenient and affordable.
            </p>
            <h3>
              MEET OUR TEAM
            </h3>
          </div>
          <Slider {...settings}>
            <div className='phone_slider'>
              <img src={doc3} alt='logo-img' className='' />
              <h3>Lorem Ipsum</h3>
            </div>
            <div className='phone_slider'>
              <img src={doc2} alt='logo-img' className='' />
              <h3>Lorem Ipsum</h3>
            </div>
            <div className='phone_slider'>
              <img src={doc3} alt='logo-img' className='' />
              <h3>Lorem Ipsum</h3>
            </div>
            <div className='phone_slider'>
              <img src={doc4} alt='logo-img' className='' />
              <h3>Lorem Ipsum</h3>
            </div>

          </Slider>

          </Container>

        </section>

        <section className="carousels">
          {/* Carousels content */}
        </section>

        <section className="bottom-carousal">
          {/* Bottom Carousal content */}
        </section>

        <section className="sol">
          {/* Sol section content */}
        </section>

        <section className="contact-us">
          {/* Contact Us section content */}
        </section>
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )


}

export default Home;