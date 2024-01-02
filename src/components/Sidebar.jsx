import React, { useState } from 'react';
import '../App.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Modal,Button } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='sides' style={{ position: 'fixed', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large"><Link to="/dashboard">Dashboard</Link></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/blogs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns"><Link to="/blogs">Blogs</Link></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note">
              <Link to="/tables">User Tables</Link>
                </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/create-data" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
              <Link to="/create-data">User Create</Link>
                </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/user_feedback" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
              <Link to="/user_feedback">Feedback</Link>
                </CDBSidebarMenuItem>
            </NavLink>

            {/* <CDBSidebarMenuItem icon="exclamation-circle" onClick={handleShow}>Sign Out</CDBSidebarMenuItem> */}
            {/* <NavLink exact to="/" target="_blank" activeClassName="activeClicked">

            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>


        {/* logout modal */}
        {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Do you really wish to leave and logout? </Modal.Body>
        <Modal.Footer>
        <Link to="/login">
        <Button variant="success btn-modal" onClick={handleClose}>
            Yes, Sign Out
          </Button>
        </Link>
          <Button variant="danger btn-modal" onClick={handleClose}>
            No, Cancel
          </Button>
        </Modal.Footer>
        </Modal> */}

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;