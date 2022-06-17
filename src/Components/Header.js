import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
    }
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
                            {
                                user
                                    ?
                                    <Nav.Link onClick={handleSignOut} >logout</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;