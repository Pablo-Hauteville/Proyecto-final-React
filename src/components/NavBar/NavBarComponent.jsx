import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import './NavBarComponent.css'

const NavBarComponent = ()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="Logo-Brand"><Link to="/" className='brand-style'><b>Pablo's Store</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/" className='Line'>Home</Link></Nav.Link>
            <Nav.Link href="#link">Notificaciones</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/category/laptops" className='text-laptop'>Laptops</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/smartphones" className='text-smartphones'>Smartphones</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBarComponent;