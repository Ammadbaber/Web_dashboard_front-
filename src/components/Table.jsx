import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Chart } from 'react-charts';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Modaal from "./Modal";
import { useParams } from "react-router-dom";

import "../../src/assets/home.css";

const Tables = () => {
  const [show, setShow] = useState(false);

  const [apiData, setApiData] = useState([]);

  const [newdata, setNewdata] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get("http://localhost:8082/userdata");
        setApiData(responses.data);

        // Log the API response in the console
        console.log("API Responses  :", responses.data);

      } catch (error) {
        console.error(
          "Error fetching data from the APIs in user data  :",
          error
        );
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (item) => {
    // console.log("id", item);
    setNewdata(item);
    setShow(true);
  };

  const handleModalClose = () => {
    setShow(false);
  };


  const deleteData = async (itemId) => {

    try {
      const response = await axios.delete(`http://localhost:8082/userdata/${itemId}`);
      console.log("Delete API Response:", response.data);
      // Optionally, you can handle the response or perform additional actions after deletion
      // For example, you might want to update the UI or redirect the user.
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <Container>
        <div className="table_inner">
          <h2>Appointment Table</h2>
          <table className="table_inner_table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item, i) => (
                <tr key={i}>
                  <td>{i+1}</td>

                  <td>{item.title}</td>
                  <td>{item.username}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.num}</td>
                  <td>
                    <Button
                      intent="primary"
                      onClick={() => handleEditClick(item)}
                    >
                      Update
                    </Button>
                    &nbsp;
                    <Button intent="danger" onClick={() => deleteData(item._id)}> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modaal
            updateData={newdata}
            shown={show}
            handleClosees={handleModalClose}
            // modalData={selectedRowData}
          />
        </div>
      </Container>
    </div>
  );
};

export default Tables;
