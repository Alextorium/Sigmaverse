import React from 'react'
import {Carousel} from 'react-bootstrap'
import './OurTeam.css'

export default function OurTeam() {
    return (
        
        <div id='teammobile' className='mobile'>
            <div>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '200px'}}>Our Team</h2>
            </div>
           
        <Carousel  variant="dark">
  <Carousel.Item>
    <img
      className="d-block soft-lines "
      src="http://placekitten.com/300/530"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Team #1</h5>
      <p style={{color:'white'}}>ljbfsdbjefhfdhjfdfdhjfdhjkdfs</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block soft-lines "
      src="http://placekitten.com/300/530"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Team #2</h5>
      <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolores corrupti? Cupiditate autem reprehenderit fuga architecto odit. Repudiandae est consectetur excepturi esse aliquid natus quam unde omnis consequuntur maiores? Voluptate? pony</p>
      <button>Know more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block soft-lines "
      src="http://placekitten.com/300/530"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>El Master uwu</h5>
      <p>Mira que pelatza</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}
