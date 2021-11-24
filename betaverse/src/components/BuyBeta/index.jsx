import React from 'react'
import Navbar1 from '../Navigation1'
import './BuyBeta.css'
import { IoCopyOutline } from 'react-icons/io5'



export default function BuyBeta() {
    
      


    return (
        <div style={{background: "#72B8F0", color: "white"}}>
            <Navbar1 />
            <br />
             <img className="dome" src="http://placekitten.com/230/300" alt="Handy"  />   
            
            
            <h1>B E T A V E R S E</h1>
            <h6>The Anti-cancel culture, freedom of speech token</h6>
            <div className="buttons-container">
              <button style={{background: 'white'}}>BUY $BETA</button> 
              <button style={{background: "none", color:'white' }}>Whitepaper</button>  
            </div>
            <div className="wallet" style={{background: "none", color:'white'}} onClick={() =>  navigator.clipboard.writeText('#dhfjksdhfsdhfjksdhfjksdhfsdhfk')}> <IoCopyOutline style={{marginRight: '7px'}} /><div>374932423742</div></div>
            
        </div> 
    )
}
