import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect } from "react";
import '../styles/userNavbar.css'
const UserNavbar = () => {

    let[dept,setDept]=useState([])
         
    useEffect(()=>{
        let fetchData=async()=>{
          let response=await  fetch('http://localhost:1500/departments')
          let data=await response.json()
    
          setDept(data)
       }
        fetchData()
    
     },[dept])


    



    return ( 


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           
        <Container>
          <Navbar.Brand ><Link style={{ textDecoration: 'none' }}  to='/user/'>HOSPITAL MANAGEMENT SYSTEM</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link ><Link style={{ textDecoration: 'none' }} to='/user/dept-list'>Departments</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'none' }} to='/user/HOD-list'>Doctors</Link></Nav.Link>
          

              
              
              
            </Nav>
            <Nav>
              <Nav.Link ><Link style={{ textDecoration: 'none' }} to='/user/login'>Login as admin</Link></Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>






     );
}
 
export default UserNavbar;