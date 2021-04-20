import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import ColouredLine from "./ColouredLine";  

const NavBar = () => (
    <div>
        <Navbar className="nav" variant="dark">
            <div className="nav-links">
                <Nav className="mr-auto">
                    <Nav.Link href="#">HOME</Nav.Link>
                    <Nav.Link href="#">ABOUT</Nav.Link>
                    <Nav.Link href="#">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#">CONTACT</Nav.Link>
                </Nav>
            </div>
        </Navbar>
        <ColouredLine />
    </div>
);

export default NavBar;