
import React, {useState} from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import {AiOutlineMenu} from "react-icons/ai"
import '../Navigation1/Navigation1.css'

export default function Navbar1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const home = '#home'
  const about = '#about'
  const tokenomics = '#token'
  const charity = '#charity'
  const team = '#team'
  const useCases = '#usecases'
  const buy = '#buy'

    return (
        <>
        
<Navbar style={{background: "none", }}  expand="xl" >
  <Container className='container-nav' style={{display: "flex",
    flexWrap: 'wrap', justifyContent: 'flex-end', }}>
    <AiOutlineMenu className='CanvasButton' onClick={handleShow}  style={{borderColor: 'rgba(0,0,0,.0)', color:"white", position: 'fixed', top: '10px', right: '10'}}/>
    <Navbar.Collapse id="collapse-navbar" style={{position: 'fixed', top: 0}} >

      <Nav className="me-auto">

        <Offcanvas show={show} onHide={handleClose}>
         <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
        <Nav.Link href={home}>Home</Nav.Link>
        <Nav.Link href={about}>About Us</Nav.Link>
        <Nav.Link href={tokenomics}>Tokenomics</Nav.Link>
        <Nav.Link href={charity}>Charity</Nav.Link>
        <Nav.Link href={team}>Team</Nav.Link>
        <Nav.Link href={useCases}>Usecases</Nav.Link>
        <Nav.Link href={buy}>Buy</Nav.Link>
        </Offcanvas.Body>
         </Offcanvas>

        <Nav.Link href={home}>Home</Nav.Link>
        <Nav.Link href={about}>About Us</Nav.Link>
        <Nav.Link href={tokenomics}>Tokenomics</Nav.Link>
        <Nav.Link href={charity}>Charity</Nav.Link>
        <Nav.Link href={team}>Team</Nav.Link>
        <Nav.Link href={useCases}>Usecases</Nav.Link>
        <Nav.Link href={buy}>Buy</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

