import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import './NavBarComponent.css'

const NavBarComponent = ()=> {
  return (
    <Navbar expand="lg" className="bg-body-nav">
      <Container>
        <Navbar.Brand className="Logo-Brand"><Link to="/" className='brand-style'><b>Pablo's Music $tore</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/" className='line'>Home</Link></Nav.Link>
            
            <NavDropdown title="Categorías" className="nav-dropdown-title">
              <NavDropdown.Item><Link to="/category/guitarras" className='text-cat'>Guitarras</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/bajos" className='text-cat'>Bajos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/percucion" className='text-cat'>Percución</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/amplificacion" className='text-cat'>Amplificación</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Accesorios" className='text-cat'>Accesorios</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/teclados" className='text-cat'>Teclados/controladores MIDI</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Efectos" className='text-cat'>Efectos</Link></NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBarComponent;