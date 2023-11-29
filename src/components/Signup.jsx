import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';




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

    const navigate = useNavigate();
    const onSubmit = (data) => {
      navigate('/login');
      console.log(data);
    };


    return (
        <div className="login-form">
            <div className='login-form-inner'>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <h2>Signup Form</h2>

                    {/* for Email */}

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
                        // value={confirmPassword}
                        // onChange={handleConfirmPasswordChange}
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
        </div>
    );
}

export default Signup;
