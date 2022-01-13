
import React, {useState} from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import {AiOutlineMenu} from "react-icons/ai"
import '../Navigation1/Navigation1.css'
import {Link} from 'react-scroll'

export default function Navbar1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
    return (
        <>
        
<Navbar style={{background: "none", }}  expand="lg" >
  <Container className='container-nav' style={{display: "flex",
    flexWrap: 'wrap', justifyContent: 'flex-end', }}>
    <AiOutlineMenu className='CanvasButton' onClick={handleShow}  style={{borderColor: 'rgba(0,0,0,.0)', color:"white", position: 'fixed', top: '10px', right: '15'}}/>
    <Navbar.Collapse id="collapse-navbar" style={{position: 'fixed', top: 0}} >
          <Offcanvas className='font-face-MSR' style={{backgroundColor: 'black',fontSize: '35px' , color: 'white'}} show={show} onHide={handleClose}>
         <Offcanvas.Header closeButton>
          <Offcanvas.Title className='font-face-MSR' style={{fontSize: '40px'}}>Menu</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body className='menuoff' style={{backgroundColor: 'black'}}>
        <Nav.Link>
          <Link to='homemobile' spy={true} smooth={true}>Home</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to='sigmaversemobile' spy={true} smooth={true}>SIGMAVERSE</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to='tokenomicsmobile' spy={true} smooth={true}>TOKENDIST</Link>
        </Nav.Link>
        
        <Nav.Link>
          <Link to='therealtokenomicsmobile' spy={true} smooth={true}>TOKENNOMICS</Link>
        </Nav.Link>



        <Nav.Link>
         <Link to='usecasesmobile' spy={true} smooth={true}>USE CASES</Link> 
        </Nav.Link>

        <Nav.Link>
         <Link to='teammobile' spy={true} smooth={true}>TEAM</Link> 
        </Nav.Link>

        <Nav.Link>
         <Link to='roadmapmobile' spy={true} smooth={true}>ROADMAP</Link> 
        </Nav.Link>

        <Nav.Link>
         <Link to='faqsmobile' spy={true} smooth={true}>FAQ's</Link> 
        </Nav.Link>

        <Nav.Link>
         <Link to='buy' spy={true} smooth={true}>BUY</Link> 
        </Nav.Link>
        
        
               
        
        
        
        
        </Offcanvas.Body>
         </Offcanvas>
        
        
      <Nav className="desktop">
        <Nav.Link>
         <Link to='home' >HOME</Link> 
        </Nav.Link>
        <Nav.Link>
         <Link to='sigmaverse'>SIGMAVERSE</Link> 
        </Nav.Link>
        <Nav.Link>
         <Link to='tokenomics' >TOKENDIST</Link> 
        </Nav.Link>
        <Nav.Link>
         <Link to='theRealtokenomics' >TOKENOMIKS</Link> 
        </Nav.Link>
        <Nav.Link>
         <Link to='usecases' >USE CASES</Link> 
        </Nav.Link>
        <Nav.Link>
          <Link to='team'>TEAM</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='roadmap'>ROAD MAP</Link>
        </Nav.Link>
        <Nav.Link>
        <Link to='faqs'>FAQ's</Link> 
        </Nav.Link>
        
        <Nav.Link>
         <Link to='buy'>BUY</Link> 
        </Nav.Link>

        
        
        
        
        
         
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

