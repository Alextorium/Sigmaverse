import React from 'react'
import {Carousel} from 'react-bootstrap'
import './OurTeam.css'
import boss from '../assets/boss.jpg'
import cofounder from '../assets/cofounder.jpg'
import nia from '../assets/nia.png'

export default function OurTeam() {
    return (
        
        <div id='teammobile' className='mobile font-face-MSB' >
            <div>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '200px'}}>Our Team</h2>
            </div>
           
        <Carousel  variant="dark">
  <Carousel.Item>
    <img
      className="d-block soft-lines "
      src={boss}
      alt="First slide"
    />
    <Carousel.Caption style={{color:'white'}}>
      <h5>Lord Njord</h5>
      <p style={{color:'white'}}>Founder, EU Citizen </p>
      <p>Lead Solidity Dev</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{color:'white'}}>
    <img
      className="d-block soft-lines "
      src={cofounder}
      alt="Second slide"
    />
    <Carousel.Caption style={{color:'white'}}>
      <h5>Iðunn</h5>
      <p >Co Founder, EU Citizen</p>
      <p>Lead Marketing</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block soft-lines "
      src={nia}
      alt="Third slide"
    />
    <Carousel.Caption style={{color:'white'}}>
      <h5>Αρχοντας of Whiskersland</h5>
      <p>Co Founder, Latin America</p>
      <p>React, JS, and Solidity Dev</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block soft-lines "
      src="http://placekitten.com/300/530"
      alt="Third slide"
    />
    <Carousel.Caption style={{color:'white'}}>
      <h5>El Master uwu</h5>
      <p>Mira que pelatza</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}
