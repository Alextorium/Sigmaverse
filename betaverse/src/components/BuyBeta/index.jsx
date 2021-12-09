import React from 'react'
import Navbar1 from '../Navigation1'
import './BuyBeta.css'
import { IoCopyOutline } from 'react-icons/io5'
import Scroll from  '../assets/Scroll bar.png'
import Element from '../assets/Element (2).png'
import Counter from '../Counter'
import { Button } from 'react-bootstrap';


export default function BuyBeta() {
    const keyCopy = '#dhfjksdhfsdhfjksdhfjksdhfsdhfk'
    
      


    return (

      <div className='mobile'>
        <div id='homemobile' style={{minWidth:'375px'}} className="background " >
           
           {/* <img src={process.env.PUBLIC_URL + '/assets/BANNER (2).png'} alt='sdfsd' /> */}
            <Navbar1 />
            <div className='desktop-container'>
            <div className='foot-container' style={{minWidth:'375px'}}>
              <img className="dome " src={Element} alt="Handy"  />    
            </div>
              
            <div className='sigma-container'>
            <h1 style={{paddingRight: '70px'}} className="font-face-HB sigmaverse ">
              SIGMA
              </h1>

            <h1 style={{paddingLeft: '70px', paddingBottom: '15px'}} className="font-face-HB sigmaverse ">
              VERSE
              </h1>
            </div>
            <h4 className='font-face-MSR sigmaver-sub'>The Anti-cancel culture, freedom of speech token</h4>
            <div className="buttons-container font-face-MSB">
                
              <Button className='button-sigma ' style={{ color: 'black',background: 'white',}}>BUY $SIGMA</Button> 
              <Button className='button-sigma ' style={{background: "none", color:'white',  }}>Whitepaper </Button>  
            </div>
            <div className='container-key'>
            <Button className="wallet button-copy font-face-MSB extender"  onClick={() =>  navigator.clipboard.writeText(keyCopy)}> <IoCopyOutline style={{marginRight: '7px'}} />
            0x5a15466
            </Button>
            </div>
            </div>


            <div className='scroller MW'>
               <img className='MW ' src={Scroll} alt=""  />
            </div>
            <br />
            <Counter />
            <div className='coverUp'></div>
            
            
        </div> 
        </div>
    )
}
