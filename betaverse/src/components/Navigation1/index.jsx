
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function Navbar1() {
    return (
        <>
        
<Navbar style={{background: "none", }}  expand="lg"  variant="dark">
  <Container style={{display: "flex",
    flexWrap: 'wrap', justifyContent: 'flex-end'}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav1" style={{borderColor: 'rgba(0,0,0,.0)'}}/>
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <Nav.Link href="#home">Tokenomics</Nav.Link>
        <Nav.Link href="#link">Charity</Nav.Link>
        <Nav.Link href="#link">Team</Nav.Link>
        <Nav.Link href="#home">Usecases</Nav.Link>
        <Nav.Link href="#link">Buy</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
