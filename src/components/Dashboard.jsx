
import React from 'react'
import  {Outlet}  from "react-router-dom";

import Button from 'react-bootstrap/Button';
import notif from '../../src/assets/images/notification.png'
import new_icon from '../../src/assets/images/Paper Plus.png'
import App from '../App';
import '../../src/assets/home.css'

import Nav_bar from './Nav_bar';
import Sidebar from './Sidebar';
const Dashboard = () => {
  return (
    <div>

        <Nav_bar/>
        <Outlet />
        <Sidebar/>
    </div>
  )
}

export default Dashboard
