import React from 'react'
import RoadMapD22 from '../assets/RM2022.png'
import RoadMapD23 from '../assets/RM2023.png'
import RoadMapTemp from '../assets/RMTemp.png'
import './RoadMap.css'
import ROADMAP from '../assets/ROAD.png'

export default function RoadMapDesktop() {
    return (
        <div id='roadmap' className='desktop font-face-MSR'>
            <div id='roadmapcontainer'>
             <h2  className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '1000px', paddingBottom:'20px'}}>ROADMAP</h2>   
             <img src={ROADMAP} alt="" style={{maxWidth:'1100px'}} />
              {/*<div className='rm-22' style={{color: 'white', fontSize:'23px'}}>
              <img className='roadMap' src={RoadMapD22} alt="" /> 
              <div className='flex-container'>
                  <div className='rm-text-container'>
                       <p>Launch Smart Contract</p>
                       <p>Launch DAO </p>
                       <p>Launch SigmaChan Beta</p>
                       <p>Launch NFT Collection 1</p>
                  </div> 
                  <div className='rm-text-container'>
                      <p>Cross Chain ETH, BSC</p>
                      <p>Launch SigmaCrush Beta</p>
                      <p>Launch NFT Collection 2 & 3</p>
                      <p>Launch SigmaBuyBack</p>
                  </div>
                  <div className='rm-text-container'>
                      <p>Launch SigmaChan 1.0</p>
                      <p>Launch SigmaCrush 1.0</p>
                      <p>burn 10% (preprogrammed time locked contracted) </p>
                  </div>
                  <div className='rm-text-container'>
                      <p>Connection SigmaChan and SigmaCrush </p>
                      <p>Launch NFT Collection 4</p>
                  </div>
              </div> 
             </div>

             <br />
             
             <div className='rm-23' style={{color: 'white', fontSize:'23px'}}>
              <img src={RoadMapTemp} alt="" />   
              <div className='flex-container'>
                  <div className='rm-text-container' style={{maxWidth:'250px'}}>
                      <p>Integration to the MeseVerse</p>
                      <p>SigmaVerse Wallet</p>
                  </div> 
                  <div className='rm-text-container'>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident facere, nisi quia repellat quasi, quis, ab neque consectetur recusandae incidunt aspernatur eius nemo repudiandae. Enim nesciunt illo quaerat nisi. Nam.</p>
                  </div>
                  <div className='rm-text-container'>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore fugit quia incidunt magni ipsum dolores blanditiis, perferendis consequatur soluta ipsam omnis quas doloribus iste pariatur repudiandae cupiditate atque sit!</p>
                  </div>
                  <div className='rm-text-container'>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sit, ullam ratione blanditiis rem inventore nemo reiciendis quaerat sunt animi asperiores! Repellat asperiores, nostrum sint facilis dolorum aliquam iusto corrupti.</p>
                  </div>
              </div> 
             </div>
              */}
            </div>
            <br />
        </div>
    )
}
