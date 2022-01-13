import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Background1 from  '../assets/UseCasesBG1.png'
import Background2 from '../assets/UseCasesBG2.png'
import sigmaCrush from '../assets/SigmaVerse.png'
import sigmaChan from '../assets/sigmaChan.png'
import './UseCases.css'
import SigmaCharity from '../modals/SigmaCharity'
import SigmaChan from '../modals/SigmaChan'
import SigmaCrush from '../modals/SigmaCrush'
import SigmaNFT from '../modals/SigmaNFT'


export default function UseCases() {

  const [showCharity, setshowCharity] = useState(false)
  const [showChan, setshowChan] = useState(false)
  const [showCrush, setshowCrush] = useState(false)
  const [showNFT, setshowNFT] = useState(false)


    return (
        <div id='usecasesmobile' className='mobile'>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '220px'}}>Use Cases</h2>
            <div>
                         <Card className="bg-dark text-white cancel-gray">
             <Card.Img  src={Background1} alt="Card image" />
             <Card.ImgOverlay className='overlay-items' style={{borderRadius:'15px'}}>
                 <h3 >SigmaChan</h3>
                 <div className='use-cases-img' >
                 <img  src={sigmaChan} style={{borderRadius:'15px', maxHeight:'361px', maxWidth:'291px'}} alt="Card " />
                 
                </div>
                <div>
                 <Button className='download-button'onClick={() => setshowChan(true)}
                >
                    More info SigmaChan</Button>   
                </div>
                
              </Card.ImgOverlay>
              </Card>   
            </div>
            <br />
            <div>
            <Card className="bg-dark text-white cancel-gray">
             <Card.Img  src={Background2} alt="Card image" />
             <Card.ImgOverlay className='overlay-items' style={{borderRadius:'15px'}}>
                 <h3 >SigmaCrush</h3>
                 <div className='use-cases-img' >
                 <img  src={sigmaCrush} style={{borderRadius:'15px', maxHeight:'361px', maxWidth:'291px' }} alt="Card " />
                 
                </div>
                <div>
                 <Button className='download-button'onClick={() => setshowCrush(true)}
                >More info SigmaCrush</Button>   
                </div>
                
              </Card.ImgOverlay>
              </Card>
            </div>
            <br />

            <div>
                         <Card className="bg-dark text-white cancel-gray">
             <Card.Img  src={Background1} alt="Card image" />
             <Card.ImgOverlay className='overlay-items' style={{borderRadius:'15px'}}>
                 <h3 >SigmaCharity</h3>
                 <div className='use-cases-img' >
                 <img  src={sigmaChan} style={{borderRadius:'15px', maxHeight:'361px', maxWidth:'291px'}} alt="Card " />
                 
                </div>
                <div>
                 <Button className='download-button'onClick={() => setshowCharity(true)}
                >
                    More info SigmaCharity</Button>  
                </div>
                
              </Card.ImgOverlay>
              </Card>   
            </div>
            <br />
            <div>
            <Card className="bg-dark text-white cancel-gray">
             <Card.Img  src={Background2} alt="Card image" />
             <Card.ImgOverlay className='overlay-items' style={{borderRadius:'15px'}}>
                 <h3 >SigmaNFT</h3>
                 <div className='use-cases-img' >
                 <img  src={sigmaCrush} style={{borderRadius:'15px', maxHeight:'361px', maxWidth:'291px' }} alt="Card " />
                 
                </div>
                <div>
                 <Button className='download-button'onClick={() => setshowNFT(true)}
                >More info SigmaNFT</Button>   
                </div>
                
              </Card.ImgOverlay>
              </Card>
            </div>

            <SigmaCharity 
            show={showCharity}
            onHide={() => setshowCharity(false)}
            />
            <SigmaChan
            show={showChan}
            onHide={() => setshowChan(false)}
            />
            <SigmaCrush
            show={showCrush}
            onHide={() => setshowCrush(false)}
            />
            <SigmaNFT
            show={showNFT}
            onHide={() => setshowNFT(false)}
            />

        </div>
    )
}
