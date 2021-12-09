import React from 'react'
import { Button } from 'react-bootstrap'
import { IoCopyOutline } from 'react-icons/io5'
import './BuySigmaDestop.css'
import Scroll from '../assets/ScrollBarDesktop.png'
import Element from '../assets/ElementDesktop.png' 
import Navbar1 from '../Navigation1'
import Counter from '../Counter'


export default function BuySigmaD() {

    const keyCopy = '#dhfjksdhfsdhfjksdhfjksdhfsdhfk'
    return (
        <div id='home' className='desktop'>
        <div style={{maxWidth:'1200px', minHeight: '850px'}} className='  dbackground'>
            
           <Navbar1  />
           <br />

            <div className="buttons-container-d font-face-MSB">
                 <div className='text-container-d'>
            
            <div>
                <div className='sigmaverse-d'>SIGMAVERSE</div>
             <h4 className='font-face-MSR sigmaver-sub-desktop'>The Anti-cancel culture, freedom of speech token</h4>
             <div className='desktop-buttons'>
               <Button className='button-sigma desktop-button' style={{ color: 'black',background: 'white',}}>BUY $SIGMA</Button> 
              <Button className='button-sigma desktop-button' style={{background: "none", color:'white',  }}>Whitepaper </Button>   
              <Button className=" font-face-MSB wallet-desktop"  onClick={() =>  navigator.clipboard.writeText(keyCopy)}> <IoCopyOutline style={{marginRight: '7px'}} />
            0x5a154665b4c9ae5f7946d78197a384b1194542956
            </Button>
             </div>
                  
            </div>
            
              
            
            <img className='dome-desktop' src={Element} alt="" />
            </div>
            </div>

            
            <div>
               <img src={Scroll} alt="" /> 
            </div>
            <Counter />
            

        </div>
        </div>
    )
}
