import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import cx from 'classnames';
import style from './header.module.sass';

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
                <Navbar.Toggle
                    aria-controls="main-navbar-nav"
                    className="border-0"
                />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/LeafletMap">
                            <Nav.Link>Leaflet Map</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/chart">
                            <Nav.Link>Chart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/401">
                            <Nav.Link>401 Unauthorized</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/403">
                            <Nav.Link>403 Forbidden</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/404">
                            <Nav.Link>404 Not Found</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
