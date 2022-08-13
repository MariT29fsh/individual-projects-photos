import {Form, FormControl, Nav, Navbar, NavDropdown,Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import './header.css'
const Header= ()=> {

  const navigate=useNavigate();
  return (
    <Navbar expand="lg" className='boxi' >
      <Container>
        <Navbar.Brand >
          <Link to='/' className='letras' >
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
          <Nav.Link as={Link} to='/mybook' className='letras'>
              My Book
            </Nav.Link>
              
            <NavDropdown className='letras' title="Chimuelon" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile" >My Profile</NavDropdown.Item>

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

export default Header;