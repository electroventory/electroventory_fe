import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const tabs = [
    { "title": "Dashboard", "href": "/dashboard" }
]
const tabComponents = tabs.map((tab, index) => {
    return (
        <Nav.Link
            as={Link}
            to={tab.href}
            key={index}
        >
            {tab.title}
        </Nav.Link>
    )
});

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {tabComponents}
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;