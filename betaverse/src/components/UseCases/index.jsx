import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Background1 from  '../assets/UseCasesBG1.png'
import Background2 from '../assets/UseCasesBG2.png'
import './UseCases.css'
export default function UseCases() {
    return (
        <div id='usecasesmobile' className='mobile'>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '220px'}}>Use Cases</h2>
            <div>
                         <Card className="bg-dark text-white cancel-gray">
             <Card.Img  src={Background1} alt="Card image" />
             <Card.ImgOverlay className='overlay-items' style={{borderRadius:'15px'}}>
                 <h3 style={{paddingRight:'30px'}}>SigmaChan</h3>
                 <div className='use-cases-img' >
                 <img  src='http://placekitten.com/191/261' style={{borderRadius:'15px'}} alt="Card " />
                 
                </div>
                <div>
                 <Button className='download-button'>Download SigmaChan</Button>   
                </div>
                
              </Card.ImgOverlay>
              </Card>   
            </div>
            <br />
            <div>
            <Card className="bg-dark text-white cancel-gray">
             <Card.Img  src={Background2} alt="Card image" />
             <Card.ImgOverlay className='overlay-items' style={{borderRadius:'15px'}}>
                 <h3 style={{paddingRight:'30px'}} >SigmaCrush</h3>
                 <div className='use-cases-img' >
                 <img  src='http://placekitten.com/191/261' style={{borderRadius:'15px', }} alt="Card " />
                 
                </div>
                <div>
                 <Button className='download-button'>Download SigmaCrush</Button>   
                </div>
                
              </Card.ImgOverlay>
              </Card>
            </div>

        </div>
    )
}
