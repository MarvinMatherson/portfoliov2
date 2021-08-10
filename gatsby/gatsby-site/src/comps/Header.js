import * as React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () =>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">TheMarvin</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px',
            
            
            }}
                navbarScroll
            >
            
            <Nav.Link href="#action1">Projects</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
         </Navbar> 
        </div>
    )
}

export default Header;