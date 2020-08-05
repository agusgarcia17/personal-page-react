import React from 'react';
import {  Link } from 'react-router-dom';
import {  Navbar, Nav} from 'react-bootstrap';



function NavBar(){

    return(
        <Navbar className="border-bottom" bg="transparent" expand='lg'>
            <Navbar.Brand href="/" className="font-pagina">Agustina Garcia</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    <Link className="nav-link font-pagina" to='/'>Home</Link>
                    <Link className="nav-link font-pagina" to='/aboutme'>Sobre m&iacute;</Link>
                    <Link className="nav-link font-pagina" to='/contact'>Contacto</Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
)
}

export default NavBar;