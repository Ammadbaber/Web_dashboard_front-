import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Modaal = ({ shown, handleClosees, updateData }) => {
const id = updateData._id;
  const [formData, setFormData] = useState({
    title: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    num: "",
  });
  const [apiData, setApiData] = useState([]);
  const updateSubmit = async (e) => {
    e.preventDefault();
    // Use formData directly for your API request
    try {
      const response = await axios.put(`http://localhost:8082/modal/${id}`,formData);
      console.log("roman",response)
      setApiData(response.data);
      console.log("API Response by id:", response.data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };
  return (
    <div>
      <Modal show={shown} onHide={handleClosees}>
        <Modal.Header closeButton>
          <Modal.Title>Update User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="Container">
            <form autoComplete="off" onSubmit={updateSubmit }>
              <Row className="Row">
                <Col className="Col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      autoFocus
                      defaultValue={updateData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col className="Col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label> User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Username"
                      autoFocus
                      defaultValue={updateData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="Row">
                <Col className="Col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    >
                    <Form.Label> First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Firstname"
                      autoFocus
                      defaultValue={updateData.firstname}
                      onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col className="Col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label> User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Lastname"
                      autoFocus
                      defaultValue={updateData.lastname}
                      onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="Row">
                <Col className="Col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                      defaultValue={updateData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="Col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label> Enter Phone Number</Form.Label>
                    <Form.Control
                      className="rem"
                      type="Number"
                      placeholder="0314*******"
                      autoFocus
                      defaultValue={updateData.num}
                      onChange={(e) => setFormData({ ...formData, num: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" onClick={handleClosees}  type="submit">
                Save Changes
              </Button>
            </form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosees}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Modaal;