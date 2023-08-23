import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import cx from 'classnames';
import style from './navbar.module.sass';

const Header = () => {
    return (
        <div className={cx('position-fixed', style.navbar)}>
            <Navbar
                expand="lg"
                className={'bg-body-tertiary px-3'}
                data-bs-theme="dark"
            >
                <Navbar.Brand as={Link} to="/">
                    Demo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" className='border-0' />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/LeafletMap">
                            <Nav.Link>Leaflet</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/chart">
                            <Nav.Link>Chart</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
