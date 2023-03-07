import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/adminNavbar.css'
import { Link } from 'react-router-dom';


function AdminNavbar() {
   
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link style={{ textDecoration: 'none' }} to='/admin/'>Admin-Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            
           
            <NavDropdown title="Departments " id="collasible-nav-dropdown">
              <NavDropdown.Item  ><Link style={{ textDecoration: 'none' }} to='/admin/dept-list'>Department</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link style={{ textDecoration: 'none' }} to='/admin/add-dept'>Add Department</Link>
              </NavDropdown.Item>
             
            </NavDropdown>
                         
            <NavDropdown title="Doctors" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link style={{ textDecoration: 'none' }} to='/admin/HOD-list'>List of Doctors</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{ textDecoration: 'none' }} to='/admin/add-HOD'>Add Doctor</Link>
              </NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Empoloyees" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link style={{ textDecoration: 'none' }} to='/admin/emp-list'>List of Employees</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{ textDecoration: 'none' }} to='/admin/add-emp'>Add Employees</Link>
              </NavDropdown.Item>
                </NavDropdown>

            <NavDropdown title="Patients" id="collasible-nav-dropdown">
            <NavDropdown.Item><Link style={{ textDecoration: 'none' }} to='/admin/patient-list'>Patient List</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link style={{ textDecoration: 'none' }} to='/admin/add-patient'>Add Patient</Link>
              </NavDropdown.Item>
           
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to='/' >Logout</Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default AdminNavbar;