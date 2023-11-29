import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import * as yup from 'yup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../src/assets/home.css'




/**
 * Login Component
 *
 * All rights | ArhamSoft Pvt @2023
 *
 * @returns {JSX.Element} -JSX representation of the component.
 *
 */
function User() {
    /**
      * Design a schema for creating login Field with form validations.
      *
      * Author:
      * Date: October 26, 2023
      */
    const schema = yup.object().shape({

        email: yup
            .string()
            .required('Email is Required')
            .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email Format'),
        password: yup
            .string()
            .required('Password is required'),
        confirmPassword: yup
            .string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    });

    // They are part of the schema, form management and validation logic for Login field
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema), // Use yupResolver for schema validation
    });
    //   confirm password match function
    // const [confirmPassword, setConfirmPassword] = useState('');

    // const handleConfirmPasswordChange = (e) => {
    //     setConfirmPassword(e.target.value);
    // };
    /**
        * handle onSubmit will be called when the form is submitted
        *
        * Author:
        * Date: October 26, 2023
        */
    const onSubmit = (data) => {
        console.log('Form Data:', data);

    };

    return (
        <div className="login-form user">
            <div className='login-form-inner'>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <h2>User Detail</h2>
                    {/*  */}
                    <div className="col-md-12 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 ">
            <img
              className="rounded-circle"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="User Avatar"
            />
            <span className="font-weight-bold">Ammad baber</span>
            <span className="text-black-50">ammad@mail.com.my</span>
            <span> </span>
          </div>
        </div>
                    {/*  */}

                    <Container fluid="md">
                       <h5 className='text-left'>General Detail</h5>

                        <Row className='mb-3' >
                            <Col>
                            <Form.Label htmlFor="basic-url">First Name</Form.Label>
                                <input
                                type="name"
                                placeholder="First Name"/>
                            </Col>
                            <Col>
                            <Form.Label htmlFor="basic-url">Last Name</Form.Label>
                            <input
                                type="name"
                                placeholder="Last Name"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Label htmlFor="basic-url">Your Date Of Birth</Form.Label>
                                <input
                                type="date"
                                placeholder="Birthday"/>
                            </Col>


                            <Col>
                            <Form.Label htmlFor="basic-url">Gender</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                {/* <option value="3">Three</option> */}
                            </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-3' >
                            <Col>
                            <Form.Label htmlFor="basic-url">Email</Form.Label>
                                <input
                                type="email"
                                placeholder="Email"/>
                            </Col>
                            <Col>
                            <Form.Label htmlFor="basic-url">Phone Number</Form.Label>
                            <input
                                type="number"
                                placeholder="Last Name"/>
                            </Col>
                        </Row>

                        <h5 className='text-left'>Address Detail</h5>
                        <Row className='mb-3' >
                            <Col md={8}>
                            <Form.Label htmlFor="basic-url">Address</Form.Label>
                                <input
                                type="text"
                                placeholder="Enter your home address"/>
                            </Col>
                            <Col>
                            <Form.Label htmlFor="basic-url"> Number</Form.Label>
                            <input
                                type="number"
                                placeholder="No."/>
                            </Col>
                        </Row>
                        <Row className='mb-3' >
                            <Col>
                            <Form.Label htmlFor="basic-url">City</Form.Label>
                                <input
                                type="text"
                                placeholder="City"/>
                            </Col>
                            <Col>
                            <Form.Label htmlFor="basic-url"> Select State</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>SelectState</option>
                                <option value="1">State 1</option>
                                <option value="2">State 2</option>
                                {/* <option value="3">Three</option> */}
                            </Form.Select>
                            </Col>
                            <Col>
                            <Form.Label htmlFor="basic-url">Zip</Form.Label>
                                <input
                                type="text"
                                placeholder="Zip"/>
                            </Col>
                        </Row>
                    </Container>
                    <button className='success' type="submit">Save Changes</button>
                    {/* <div className='remember_me'>
                        <span className="forget-psw">
                            <Link to="/login">
                                <a href="/">Back to Login</a>
                            </Link>

                        </span>
                    </div> */}
                </form>
            </div>
        </div>
    );
}

export default User;
