import React from 'react';

import Countdown from 'react-countdown';

import'./Counter.css'


export default function CountDown() {

    const Finished = () => (
        <button>Buy Now!</button>
      );
      
      // Renderer callback
      const renderer = ({ total, days, hours, minutes, seconds }) => {
        if (total) {
          // Render a countdown
          return (
            <div style={{marginBottom: '-1'}} className='container-counter '>
            <div className='font-face-MSB background-counter' style={{  color: 'white' }}>
              
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
         <Countdown date={'2021-12-01T14:00:00'} renderer={renderer}>
      
         </Countdown>
        </div>
    )
}
