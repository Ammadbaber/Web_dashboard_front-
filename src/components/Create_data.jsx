import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver
import * as yup from "yup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../src/assets/Create.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create_data = () => {
  //   <ToastContainer
  // position="top-right"
  // autoClose={2000}
  // hideProgressBar={false}
  // newestOnTop={false}
  // closeOnClick
  // rtl={false}
  // pauseOnFocusLoss
  // draggable
  // pauseOnHover
  // theme="light"
  // />
  const showToastMessage = () => {
    toast.success("user data submit successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errormsg = () => {
    toast.error("user data submit faild", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  /**
   * Design a schema for creating user Field with form validations.
   *
   * Author:
   * Date: December 07, 2023
   */

  const schema = yup.object().shape({
    title: yup.string().required("title is required"),
    email: yup.string().required("Email is Required"),
    firstname: yup.string().required("firstname is required"),
    lastname: yup.string().required("lastname is required"),
    username: yup.string().required("username is required"),
    num: yup.string().required("number is required"),
  });

  // They are part of the schema, form management and validation logic for Login field
  const {
    register,
    handleSubmit: hookFormSubmit,
    reset,
    // userSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use yupResolver for schema validation
  });

  //

  const getDatafromLS = () => {
    const items = JSON.parse(localStorage.getItem("books"));
    return items ? items : [];
  };

  //   const result = getDatafromLS();
  //   const result_length = result.length;
  //   console.log("items", result_length);

  // input field states
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");

  //   main array of objects state || books state || books array of objects
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Save books to local storage whenever the 'books' state changes
    localStorage.setItem("books", JSON.stringify(books));
    //   getDatafromLS();
  }, []);

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8082/userdata", data);
      console.log("response-data", response.data);
      if (response.status === 201) {
        console.log("response-status", response.status);
        showToastMessage();
      }
      // navigate('/login');
      reset();
    } catch (error) {
      if (error.status === 404) {
        console.log("response-status", error.status);
        errormsg();
      }
      console.error("Error during submit:", error);
    }

    // creating an object
    let book = {
      title,
      username,
      firstname,
      lastname,
      email,
      num,
    };

    setBooks([...books, book]);

    setTitle("");
    setUsername("");
    setFirstname("");
    setLastname("");
    setEmail("");
    setNum("");
  };
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    // Check if any input is empty and update the button state
    const anyInputEmpty =
      !title && !username || !firstname || !lastname || !email || !num;
    setIsButtonDisabled(anyInputEmpty);
  }, [title, username, firstname, lastname, email, num]);

  return (
    <div className="blogs">
      <div className="wrapper">
        <h1>User Create Data</h1>
        <p>Add and view your Data using Mongo DB</p>
        {/* <p>Total number of persons is = {result_length} </p> */}
        <div className="main">
          <div className="form-container">
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={async (e) => {
                await hookFormSubmit(handleFormSubmit)(e);
              }}
            >
              <Row>
                <Col>
                  <label>Title</label>
                  {/* <input
                    type="text"
                    placeholder="Enter Title"
                    className="form-control"
                    {...register("title")}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input> */}

                  <select  onChange={(e) => setTitle(e.target.value)} {...register("title", { required: true })}>
                    <option value="">Select Title </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  {errors.title && (
                    <span className="eroor">{errors.title.message}</span>
                  )}
                </Col>
                <Col>
                  <label>User Name</label>
                  <input
                    type="text"
                    placeholder="Enter User Name"
                    className="form-control"
                    {...register("username")}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  ></input>
                  {errors.username && (
                    <span className="eroor">{errors.username.message}</span>
                  )}
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="form-control"
                    {...register("firstname")}
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                  ></input>
                  {errors.firstname && (
                    <span className="eroor">{errors.firstname.message}</span>
                  )}
                </Col>
                <Col>
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="form-control"
                    {...register("lastname")}
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                  ></input>
                  {errors.lastname && (
                    <span className="eroor">{errors.lastname.message}</span>
                  )}
                </Col>
              </Row>

              <br></br>
              <Row>
                <Col>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                    {...register("email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {errors.email && (
                    <span className="eroor">{errors.email.message}</span>
                  )}
                </Col>
                <Col>
                  <label>Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter Number"
                    {...register("num")}
                    className="form-control"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                  ></input>
                  {errors.num && (
                    <span className="eroor">{errors.num.message}</span>
                  )}
                </Col>
              </Row>
              <br></br>
              <button
                type="submit"
                className="btn btn-success btn-md"
                disabled={isButtonDisabled}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_data;
