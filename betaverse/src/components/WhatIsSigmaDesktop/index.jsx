import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './WhatIsSigmaDesktop.css'
import SigmaDeskt from '../assets/WhatSigmaDesktop.png'


export default function WhatIsSigmaDesktop() {
    return (
        <div id='sigmaverse' className='desktop'>
            <br />
        <div style={{display:'flex'}}>
            
            <img style={{width:'500px', height: '500px', marginRight: '100px'}} src={SigmaDeskt} alt="" />
            
             <Card className='sigma-text gradient' style={{ width: '500px', height: '500px', backgroundColor: 'black' }}>
                 
     
     <Card.Body  style={{backgroundColor: 'black', borderRadius:'30px', }}>  
     <Card.Text className='font-face-MSR text what-text-desktop' style={{ paddingBottom:'35px'}}>
     We are the voice in a world of double standards, hypocracy, cancel culture, we see ourselves as front warriors against the injustice of the world, for an open society, freedom of speech and the right to one's opinion, no matter how abstract and crazy. We have made it our vocation to defend freedom of speech in a world that is represented by all possible opinion and NGOs. We are cancel free, we are steadfast, we are a decentralized army of freedom of speech against the modern zeitgeist driven by lies, manipulations and interests of the technocrats.
     </Card.Text>
     <Button className='button-whitep '><p className=' text'>Read Whitepaper</p></Button>
     </Card.Body>
     </Card>
        </div>
        </div>
    )
}
