import React from 'react'
import { Button } from 'react-bootstrap'
import './Telegram.css'

export default function Telegram() {

    return (
        <div className='max-wid' >
            <div className="backgroundTG font-face-MSB">
                <div className='telegram-container'>
                  <p className='telegram-text' style={{color: 'white'}}>BE PART OF OUR TELEGRAM COMMUNITY</p> 
                  <Button href="https://t.me/sigmaverse" className='telegram-button '>JOIN</Button>    
                  
                  
                </div>
             
            </div>
          
            
        </div>
    )
}
