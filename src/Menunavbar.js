import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Signup from './SignUp';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';



function Menunavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
              <Navbar.Brand href="#home" style={{width:'60%'}}>
              
                   

                ITpro-SkillSet
                </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <i class="fa-solid fa-user"></i> Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Online Training</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SignUp" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="#action/3.1" style={{width:'300px'}}>
              <Signup />
              
              </NavDropdown.Item>
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menunavbar;