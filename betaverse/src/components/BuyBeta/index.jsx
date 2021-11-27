import React from 'react'
import Navbar1 from '../Navigation1'
import './BuyBeta.css'
import { IoCopyOutline } from 'react-icons/io5'
import Scroll from  '../assets/Scroll bar.png'
import Element from '../assets/Element (2).png'
import Counter from '../Counter'


export default function BuyBeta() {
    
      


    return (
        <div  className="background" >
           
           {/* <img src={process.env.PUBLIC_URL + '/assets/BANNER (2).png'} alt='sdfsd' /> */}
            <Navbar1 />
            
            <div>
              <img className="dome" src={Element} alt="Handy"  />    
            </div>
              
            <h1 className="font-face-HB sigmaverse">S I G M A V E R S E</h1>
            <h4 className='font-face-MSR sigmaver-sub'>The Anti-cancel culture, freedom of speech token</h4>
            <div className="buttons-container font-face-MSB">
              <button className='button-sigma ' style={{background: 'white',}}>BUY $SIGMA</button> 
              <button className='button-sigma ' style={{background: "none", color:'white',  }}>Whitepaper </button>  
            </div>
            <div className="wallet button-copy font-face-MSB"  onClick={() =>  navigator.clipboard.writeText('#dhfjksdhfsdhfjksdhfjksdhfsdhfk')}> <IoCopyOutline style={{marginRight: '7px'}} />0x5a15466</div>
            <img src={Scroll} alt="" srcset="" />
            <Counter />
            <div className='coverUp'></div>
            
            
        </div> 
    )
}
