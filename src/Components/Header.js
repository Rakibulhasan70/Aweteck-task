import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home' >Aweteck</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;