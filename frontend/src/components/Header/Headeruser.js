import {Form, FormControl, Nav, Navbar, NavDropdown,Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
const Headeruser= ()=> {

    const navigate=useNavigate();
    return (
      <Navbar bg="primary" expand="lg" variant="light">
        <Container>
          <Navbar.Brand >
            <Link to='/'>
            Animal Photos
            </Link>
            
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
  
              <Nav className='m-auto'>
                  <Form inline>
                      <FormControl type="text" 
                      placeholder='Search'
                      className='mr-sm-2'></FormControl>
                  </Form>
              </Nav>
  
            <Nav>
            <Nav.Link as={Link} to='/mynotes'>
                My Book
              </Nav.Link>
                
              <NavDropdown title="Chimuelon" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
  
                <NavDropdown.Divider />
                <NavDropdown.Item onClick ={() =>{
                  localStorage.removeItem("userInfo");
                  navigate('/')              }}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Headeruser;