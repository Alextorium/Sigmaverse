import React from 'react'
import { Card, Button  } from 'react-bootstrap'
import SigmaBG from '../assets/SigmaBack.png'
import './WhatIsSigma.css'

export default function WhatisSigma() {
    return (
        <div id='sigmaversemobile' className='mobile'>
            <Card className="bg-dark text-white ">
             <Card.Img src={SigmaBG} alt="Card image" />
             <Card.ImgOverlay className='overlays'>
                 <div className='low-opacity' >
                 
             <Card.Title className='font-face-MSB' >WHAT IS THE SIGMAVERSE?</Card.Title>
                </div>
              </Card.ImgOverlay>
              </Card>
              <br />

              
     <Card className='sigma-text gradient' style={{ width: '330px', backgroundColor: 'black' }}>
     
     <Card.Body  style={{backgroundColor: 'black', borderRadius:'30px', }}>  
     <Card.Text className='font-face-MSR text' style={{ paddingBottom:'35px'}}>
     We are the voice in a world of double standards, hypocracy, cancel culture, we see ourselves as front warriors against the injustice of the world, for an open society, freedom of speech and the right to one's opinion, no matter how abstract and crazy. We have made it our vocation to defend freedom of speech in a world that is represented by all possible opinion and NGOs. We are cancel free, we are steadfast, we are a decentralized army of freedom of speech against the modern zeitgeist driven by lies, manipulations and interests of the technocrats.
     </Card.Text>
     <Button className='button-whitep'><p className='text'>Read Whitepaper</p></Button>
     </Card.Body>
     </Card>
     



        </div>
    )
}
