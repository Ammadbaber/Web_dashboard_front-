import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

/**
 * Signup Component
 *
 * All rights | ArhamSoft Pvt @2023
 *
 * @returns {JSX.Element} -JSX representation of the component.
 *
 */
function Signup() {
    /**
      * Design a schema for creating login Field with form validations.
      *
      * Author:
      * Date: October 26, 2023
      */
    const schema = yup.object().shape({
        username:yup
            .string()
            .required('Username is Required')
            .min(3, 'Username Must be at least 3 characters')
            .max(20, 'Username Must be less than 20 characters'),
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
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema), // Use yupResolver for schema validation
    });

    /**
        * handle onSubmit will be called when the form is submitted
        *
        * Author:
        * Date: October 26, 2023
        */

    const navigate = useNavigate();

    const onSubmit =async (data) => {

         console.log("first-data",data);
        try {
        const response=await axios.post("http://localhost:8082/signup",data)
        console.log("response-data", response.data);
        if(response.data.message === "User already exists"){
            toast.warning("User already exist", {
                autoClose: 1500
              });
            if(response.status === 200){
              reset()
            }
            else{
                // navigate('/login');
            }
        }
        else{
            navigate('/login');
        }
        } catch (error) {
        }
      };

    return (
        <div className="login-form">
            <div className='login-form-inner'>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <h2>Signup Form</h2>

                    {/* for Email */}
                    <input
                        type="text"
                        placeholder="Enter User name"
                        {...register('username')}
                    />
                    {errors.username && <span className='eroor'>{errors.username.message}</span>}


                    <input
                        type="email"
                        placeholder="Email id"
                        {...register('email')}
                    />
                    {errors.email && <span className='eroor'>{errors.email.message}</span>}

                    {/* for password */}
                    <input type="password"
                        placeholder="Enter password"
                        {...register('password')}
                        name="password" />
                    {errors.password && <span className='eroor'>{errors.password.message}</span>}

                    {/* for confirm password */}
                    <input type="password"
                        placeholder="Enter Same password"
                        name="password"
                        {...register('confirmPassword')}
                    />
                    {errors.confirmPassword && <span className='eroor'>{errors.confirmPassword.message}</span>}

                    <button type="submit">Signup</button>
                    <div className='remember_me'>
                        <span className="forget-psw">
                            <Link to="/login">
                                <a href="/">Back to Login</a>
                            </Link>

                        </span>
                    </div>
                    <div className="social-btn">
                        <button type="submit" className="twitter-btn">
                            <i className="fa fa-twitter" aria-hidden="true"></i> Signup with Twitter
                        </button>
                        <button type="submit" className="facebook-btn">
                            <i className="fa fa-facebook" aria-hidden="true"></i> Signup with Facebook
                        </button>
                        <button type="submit" className="google-btn">
                            <i className="fa fa-google" aria-hidden="true"></i> Signup with Google
                        </button>
                    </div>
                </form>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default Signup;
