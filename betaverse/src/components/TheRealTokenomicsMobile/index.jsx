import React from 'react'
import {Carousel} from 'react-bootstrap'
import mobile1 from '../assets/mobile1.png'
import mobile2 from '../assets/mobile2.png'
import mobile3 from '../assets/mobile3.png'
import mobile4 from '../assets/mobile4.png'

export default function therealtokenomicsmobile() {
    return (
        
        <div id='therealtokenomicsmobile' className='mobile font-face-MSB' >
            <div>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '200px'}}>Tokenomics</h2>
            </div>
           
        <Carousel  variant="dark">
  <Carousel.Item>
    <img
      className="d-block soft-lines "
      src={mobile1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item style={{color:'white'}}>
    <img
      className="d-block soft-lines "
      src={mobile2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block soft-lines "
      src={mobile3}
      alt="Third slide"
    />

  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block soft-lines "
      src={mobile4}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>
    )
}
