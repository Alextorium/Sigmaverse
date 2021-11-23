import React from 'react'
import Navbar1 from '../Navigation1'
import './BuyBeta.css'
export default function BuyBeta() {
    
      


    return (
        <div style={{background: "#72B8F0", color: "white"}}>
            <Navbar1 />
            
             <img className="dome" src="http://placekitten.com/230/300" alt="Handy"  />   
            
            
            <h1>BETAVERSE</h1>
            <h3>The Anti-cancel culture, freedom of speech token</h3>
            <div className="buttons-container">
              <button style={{background: 'white'}}>BUY $BETA</button> 
              <button style={{background: "none", color:'white' }}>Whitepaper</button>  
            </div>
            <div className="wallet" style={{background: "none", color:'white'}} onClick={() =>  navigator.clipboard.writeText('#dhfjksdhfsdhfjksdhfjksdhfsdhfk')}>#dhfjksdhfsdhfjksdhfjksdhfsdhfk</div>
            
        </div>
    )
}
