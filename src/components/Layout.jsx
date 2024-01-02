
import React, { useState,useEffect } from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Create_data from '../components/Create_data';
import Button from 'react-bootstrap/Button';
import notif from '../../src/assets/images/notification.png'
import new_icon from '../../src/assets/images/Paper Plus.png'


import '../../src/assets/home.css'

const Main_dashboard = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get("http://localhost:8082/dashboard");
        setApiData(responses.data);

        // Log the API response in the console
        console.log("API dashboard responce:", responses.data);
      } catch (error) {
        console.error("Error fetching in data length :", error);
      }
    };

    fetchData();
  }, []);
  console.log("apiData_lengthsss:", apiData);

  // const dataLength=JSON.parse(localStorage.getItem("books"))
  // console.log(dataLength.length)
  return (
    <div>
      <div className='projects-stats'>
        <Container>
          <h1>Dashboard</h1>
          <Row>
            <Col>
              <div className='dynamic notification'>
                <div className='ring'>
                  <img src={notif} alt='banner-img' />
                </div>
                <div className=''>
                  <h5>
                    NOTIFICATION
                  </h5>
                  <p>{apiData.users} Unread Notifications</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className='dynamic project'>
                <div className='ring'>
                  <img src={notif} alt='banner-img' />
                </div>
                <div className=''>
                  <h5>
                    PROJECT
                    {/* <Create_data sharedState={sharedState} /> */}
                  </h5>
                  <p>4 Project Last Update</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className='dynamic client'>
                <div className='ring'>
                  <img src={notif} alt='banner-img' />
                </div>
                <div className=''>
                  <h5>
                    CLIENT
                  </h5>
                  <p>6 Client Waiting</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className='dynamic create-new'>
                <div className='ring'>
                  <img src={new_icon} alt='banner-img' />
                </div>
                <div className=''>
                  <h5>
                    CREATE NEW
                  </h5>
                  <p>PROJECT</p>
                </div>
              </div>
            </Col>
          </Row>

          <div className='section-2'>
            <div className='patient-managment'>
              <h4>
                Manage your patients in one touch
              </h4>
              <p>
                The CareMD is a telemedicine company that provides a simple and helpful way for our patients to engage with their medical care providers distantly from the solace of their homes. We are focused on broadening the choice of permitting our patients to assume responsibility for their health through virtual means of medical care.
              </p>
              <Button className="primary pri_btn">Primary</Button>{' '}

            </div>
          </div>


        </Container>
      </div>

    </div>
  )
}

export default Main_dashboard;