import React from 'react';

import Countdown from 'react-countdown';


export default function CountDown() {
    return (
        <div style={{fontSize: 'xxx-large'}}>
         <Countdown date={Date.now() + 2592000000}>
      
         </Countdown>
        </div>
    )
}
