import React from 'react';
import axios from "axios";
import Dashboard from './Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";



/**
 * Login Component
 *
 * All rights | ArhamSoft Pvt @2023
 *
 * @returns {JSX.Element} -JSX representation of the component.
 *
 */
function Login() {

  const showToastMessage = () => {
    toast.success("You logged successfully", {

    });
  };

  // const errormsg = () => {
  //   toast.error("Login Failed", {

  //   });
  // };
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
  });

  // They are part of the schema, form management and validation logic for Login field
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Use yupResolver for schema validation
  });

  /**
      * handle onSubmit will be called when the form is submitted
      *
      * Author:
      * Date: October 26, 2023
      */
  const navigate = useNavigate();
  const onSubmit = async (data) => {

    console.log("Form data:", data);

    try {
      const response = await axios.post("http://localhost:8082/login", data);

      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user._id);

        // Check if the success message is being triggered
        console.log("Success message will be shown");
        toast.success("Login successful", {
          autoClose: 1500
        })


        // Navigate to Dashboard
        navigate('/Dashboard');
      } else {
        // Handle login failure
        console.log('Login failed:', response.data.message);
        toast.error("Login-faild",{autoClose: 1500})
      }

      // Reset the form
      reset();
    } catch (error) {
      console.error('Error during login:', error);

      // Show error message using toast
      // toast.error("An error occurred during login. Please try again.");

      // Log the error details
      console.log("Error:", error);
    }
  };


  return (
    <div className="login-form">
      <div className='login-form-inner'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off"   >
          <h2>Login Form</h2>

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
          {/* <span className='eroor'>{errors.password.message}</span> */}

          <button type="submit">Login</button>
          <div className='remember_me'>
            <span className="forget-psw">
              <Link to="/signup">
                <a href="/">Registerd now</a>
              </Link>

            </span>
            <span className="forget-psw">
            <Link to="/forgot-password">
            <a href="/">Forgot Password?</a>
            </Link>

            </span>
          </div>
          <div className="social-btn">
            <button type="submit" className="twitter-btn">
              <i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter
            </button>
            <div class="">
            {/* <button onClick={notify}>Notify!</button> */}

            </div>
            <button type="submit" className="facebook-btn">
              <i className="fa fa-facebook" aria-hidden="true"></i> Login with Facebook
            </button>
            <button type="submit" className="google-btn">
              <i className="fa fa-google" aria-hidden="true"></i> Login with Google
            </button>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Login;
