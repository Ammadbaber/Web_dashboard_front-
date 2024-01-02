import React from 'react'
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import * as yup from 'yup';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Forgot_password = () => {



    /**
    * Design a schema for creating forgot password Field with form validations.
    *
    * Author:
    *
    */
const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email is Required')
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email Format'),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Use yupResolver for schema validation
  });

  const onSubmit = async (data) => {
    console.log("==========================", data)
    // debugger
    try {
      const response = await axios.post('http://localhost:8082/forgot-password', data);

      console.log('Response:', response.data);

      // Reset the form
      reset();
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div>
    <div className="login-form">
      <div className='login-form-inner'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off"   >
          <h2>Forgot Password</h2>
          <label className='text-left'>
            Enter Your Email
          </label>
          <input
            type="email"
            placeholder="Email id"
            {...register('email')}
          />
          {errors.email && <span className='eroor'>{errors.email.message}</span>}
          
          <button type="submit">Submit</button>
          <div className='remember_me'>
            <span className="forget-psw">
              <Link to="/login">
                <a href="/">Back to login</a>
              </Link>
            </span>
            {/* <span className="forget-psw" onClick={handleForgotPassword}>
            <Link to="/forgot-password">
            <a href="/">Forgot Password?</a>
            </Link>
            </span> */}
          </div>

        </form>
      </div>

    </div>
    </div>
  )
}

export default Forgot_password