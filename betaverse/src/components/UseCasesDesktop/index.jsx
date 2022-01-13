import React, { useState } from 'react'
import './UseCasesDesktop.css'
import {Button} from 'react-bootstrap'
import sigmaCrush from '../assets/SigmaVerse.png'
import sigmaChan from '../assets/sigmaChan.png'
import SigmaCharity from '../modals/SigmaCharity'
import SigmaChan from '../modals/SigmaChan'
import SigmaCrush from '../modals/SigmaCrush'
import SigmaNFT from '../modals/SigmaNFT'


export default function UseCasesDesktop() {
    const [showCharity, setshowCharity] = useState(false)
    const [showChan, setshowChan] = useState(false)
    const [showCrush, setshowCrush] = useState(false)
    const [showNFT, setshowNFT] = useState(false)

    return (
        <div id='usecases' className='desktop font-face-MSR'>
            <div>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight:'1000px' }}>Use Cases</h2>
            </div>
            <br />
            <div style={{display: 'flex'}}>
             <div className='usecased1'>
                <h3 style={{color:'white', fontSize:'35px'}}>SigmaChan</h3>
                <img style={{maxWidth:'375px', maxHeight:'500px'}} className='imguses' src={sigmaChan} alt="" />
                <Button className='download-cases-btn'
                onClick={() => setshowChan(true)}
                >
                    More info SigmaChan</Button>
            </div>
            <div className='usecased2'>
            <h2 style={{color:'white', fontSize:'35px'}}>SigmaCrush</h2>
                <img style={{maxWidth:'375px', maxHeight:'500px'}} className='imguses'src={sigmaCrush} alt="" />
                <Button className='download-cases-btn'
                onClick={() => setshowCrush(true)}
                >More info SigmaCrush</Button>
                
            </div>   
            </div>

            <br />

            <div style={{display: 'flex'}}>
             <div className='usecased1'>
                <h3 style={{color:'white', fontSize:'35px'}}>SigmaCharity</h3>
                <img style={{maxWidth:'375px', maxHeight:'500px'}} className='imguses' src={sigmaChan} alt="" />
                <Button className='download-cases-btn' 
                onClick={() => setshowCharity(true)}
                >
                    More info SigmaCharity</Button>
            </div>
            <div className='usecased2'>
            <h2 style={{color:'white', fontSize:'35px'}}>SigmaNFT</h2>
                <img style={{maxWidth:'375px', maxHeight:'500px'}} className='imguses'src={sigmaCrush} alt="" />
                <Button className='download-cases-btn'
                onClick={() => setshowNFT(true)}
                >More info SigmaNFT</Button>
                
            </div>   
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
