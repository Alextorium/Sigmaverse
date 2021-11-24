import React from 'react';

import Countdown from 'react-countdown';


export default function CountDown() {

    const Finished = () => (
        <button>Buy Now!</button>
      );
      
      // Renderer callback
      const renderer = ({ total, days, hours, minutes, seconds }) => {
        if (total) {
          // Render a countdown
          return (
            <div style={{ color: 'purple' }}>
             <p style={{fontSize: 'xxx-large'}}>{days} Days</p>  
             {hours}:{minutes}:{seconds}
            </div>
          );
        } else {
          // Render a finished state
          return <Finished />;
        }
      };

    return (
        <div style={{fontSize: 'large'}}>
         <Countdown date={'2021-12-24T14:00:00'} renderer={renderer}>
      
         </Countdown>
        </div>
    )
}
