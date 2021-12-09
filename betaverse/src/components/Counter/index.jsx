import React from 'react';
import { Button } from 'react-bootstrap';

import Countdown from 'react-countdown';

import'./Counter.css'


export default function CountDown() {

    const Finished = () => (
      <div className='background-counter'>
       <Button className='buynow-counter font-face-MSB '>Buy Now !!!</Button> 
      </div>
        
      );
      
      // Renderer callback
      const renderer = ({ total, days, hours, minutes, seconds }) => {
        if (total) {
          // Render a countdown
          return (
            <div style={{marginBottom: '-1', minWidth:'375px'}} className=' container-counter '>
            <div className='font-face-MSB background-counter counter-desktop ' style={{  color: 'white' }}>
              
             <p  style={{ letterSpacing: '.2em' ,fontSize: '145.8%', paddingLeft:'10px', paddingRight:'10px'}}>{days} DAYS / {hours} Hours
             </p>  
             
             <a href="#placeholder" className='font-face-MSR' style={{color:'white', fontSize:'medium', letterSpacing: '.2em'}}>BUY PRESALE</a>
            </div>
            </div >
          );
        } else {
          // Render a finished state
          return <Finished />;
        }
      };

    return (
        <div style={{fontSize: 'large'}}>
         <Countdown date={'2021-12-08T00:00:00'} renderer={renderer}>
      
         </Countdown>
        </div>
    )
}
