import React from 'react'
import {Carousel} from 'react-bootstrap'
import './NFTs.css'

export default function NFTs() {
    return (
        
        <div id='nftmobile' className='mobile'>
            <div>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '270px'}}>NFTs</h2>
            </div>
           
        <Carousel  variant="dark">
  <Carousel.Item>
    <img
    style={{maxHeight:'530px', maxWidth: '300px'}}
      className="d-block soft-lines "
      src="https://www.winterbearsnft.com/images/animated.gif"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>NFT #1</h5>
      {/* <p style={{color:'white'}}> tex text text text text text text tex text text text text text text tex text text text text text text tex text text text text text text </p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{maxHeight:'530px', maxWidth: '300px'}}
      className="d-block soft-lines "
      src="https://www.winterbearsnft.com/images/animated.gif"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>NFT #2</h5>
      {/* <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolores corrupti? Cupiditate autem reprehenderit fuga architecto odit. Repudiandae est consectetur excepturi esse aliquid natus quam unde omnis consequuntur maiores? Voluptate? pony</p> */}
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{maxHeight:'530px', maxWidth: '300px'}}
      className="d-block soft-lines "
      src="https://www.winterbearsnft.com/images/animated.gif"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>NFT #3</h5>
      {/* <p>tex text text text text text text tex text text text text text text tex text text text text text text tex text text text text text text tex text text text text text text tex text text text text text text tex text text text text text text tex text text text text text text </p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}
