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
        <Navbar.Brand className="Logo-Brand"><Link to="/" className='brand-style'><b>Pablo's Music $tore</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/" className='Line'>Home</Link></Nav.Link>
            
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/category/guitarras" className='text-guitarras'>Guitarras</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/bajos" className='text-bajos'>Bajos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/percucion" className='text-percucion'>Percución</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/amplificacion" className='text-amplificacion'>Amplificación</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Accesorios" className='text-Accesorios'>Accesorios</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/teclados" className='text-teclados'>Teclados/controladores MIDI</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Efectos" className='text-Efectos'>Efectos</Link></NavDropdown.Item>
              
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