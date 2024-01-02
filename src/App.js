import './App.css';
import React, { useEffect } from 'react';

import { Routes,Route,useNavigate,Outlet } from 'react-router-dom';
import Home from './Home';
import Main_dashboard from '../src/components/Layout';
import NoPage from './components/no-page';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Signup';
import Detail from './components/Detail';
import User from './components/User';
import Create_data from './components/Create_data';
import Dashboard from './components/Dashboard';
import Tables from './components/Table';
import MyChart from './components/Table';
import Feedback from './components/Feedback';
import  Table  from 'react-bootstrap';
import Forgot_password from './components/Forgot-password';

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  console.log("tokenssss",token )

  useEffect(() => {

    // Check if the token is available
    if (token) {
      console.log(token,"token number")
      // Redirect to the dashboard page
      navigate('./Dashboard');
    } else {
      // Token is not available, handle accordingly (e.g., redirect to login)
      navigate('./Login');
    }
  }, [token]);

  return (
    <div className="App">
                  <Routes>

                    <Route path='/' element={<Home />}>

                    </Route>
                        <Route path="/" element={<Dashboard />}>
                        <Route path='/dashboard' element={<Main_dashboard />}/>
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/tables" element={<MyChart />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/create-data" element={<Create_data />} />
                        <Route path="/user_feedback" element={<Feedback />} />

                        <Route path="*" element={<NoPage />} />
                        <Route path="detail/:id" element={<Detail/>} />
                    </Route>

                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<Forgot_password />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* <Route path="/web" element={<Home />} /> */}

                  </Routes>
    </div>
  );
}
export default App;

