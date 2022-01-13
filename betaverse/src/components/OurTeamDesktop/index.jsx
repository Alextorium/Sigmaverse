import React from 'react'
import './OurTeamDesktop.css'
import boss from '../assets/boss.jpg'
import cofounder from '../assets/cofounder.jpg'
import nia from '../assets/nia.png'
import Team from '../assets/TEAM.png'
import Team2 from '../assets/team2.png'
import Carousel from 'react-bootstrap/Carousel'



export default function OurTeamDesktop() {
    return (
        <div id='team' className='desktop font-face-MSB'>
            {/* <div>
              <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '1000px'}}>Our Team</h2>  
            </div>
            
            <div className='ourteam-container'>
                
            <div  className='ourTeamDiv'>
                <p>Lord Njord</p>
             <img style={{minHeight: '276px'}} className='ourteam-img' src={boss} alt="" />   
             <p>Founder, EU Citizen</p>
             <p>Lead Solidity Dev</p>
            </div>
            <div className='ourTeamDiv'>
                <p>Iðunn</p>
             <img className='ourteam-img' src={cofounder} alt="" />   
             <p>Co Founder, EU Citizen</p>
             <p>Lead Marketing</p>
            </div>
            <div className='ourTeamDiv'>
                <p>Αρχοντας of Whiskersland</p>
             <img style={{maxWidth:'290px'}} src={nia} alt="" />   
             <p>Co Founder, Latin America</p>
             <p>React, JS, and Solidity Dev</p>
            </div>
            <div className='ourTeamDiv'>
                <p>Dovahkin</p>
             <img className='ourteam-img' src="https://placekitten.com/200/300" alt="" />   
             <p></p>
             <p></p>
            </div>
            
            
            </div> */}

            

            <Carousel fade style={{maxWidth:'1200px'}}>
  <Carousel.Item>
    <img
      
      src={Team}
      alt="First slide"
      style={{maxWidth:'1200px'}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      
      src={Team2}
      alt="Second slide"
      style={{maxWidth:'1000px'}}
    />


  </Carousel.Item>
 
</Carousel>


            <br />
            
        </div>
    )
}
