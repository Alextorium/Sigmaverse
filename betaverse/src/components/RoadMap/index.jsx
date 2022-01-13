import React from 'react'
import RMBGMobile from '../assets/RmMobile.png'
import RMBGMobile0 from '../assets/RMBGMobile0.png'
import './RoadMap.css'


export default function RoadMap() {
    return (
        <div id='roadmapmobile' className='mobile font-face-MSR'>
            <div className='title-div'>
                <h3>Road Map</h3>

            </div>
            <h2 style={{paddingRight: '300px', paddingBottom:'10px', color: 'white'}}>2022</h2>
            <div className='road-mobile-container'>
                <div>
                    <div>
                      <img src={RMBGMobile} alt="" />  
                    </div>
                              
                </div>

                    <div className='road-mobile-text-cont'>
                    <div className='road-mt'>
                        <p style={{paddingTop:'10px', paddingRight: '5px'}}>Launch Smart Contract.</p>
                        <p style={{paddingRight: '125px'}}>Launch DAO.</p>
                        <p >Launch SigmaChan Beta.</p>
                        <p >Launch NFT Collection 1.</p>
                    </div>
                    <div className='road-mt'>
                    <p style={{paddingRight:'28px'}}>Cross Chain ETH, BSC.</p>
                        <p style={{paddingLeft:'7px'}} >Launch SigmaCrush Beta.</p>
                        <p style={{paddingLeft:'13px', fontSize:'22px'}}>Launch NFT Collection 2 & 3.</p>
                        <p style={{paddingRight:'20px'}} >Launch SigmaBuyBack.</p>
                    </div>
                    <div className='road-mt' style={{paddingBottom:'10px'}} >
                    <p style={{paddingRight:'10px'}} >Launch SigmaChan 1.0 .</p>
                        <p >Launch SigmaCrush 1.0 .</p>
                        <p >Burn 10%</p>
                        <p style={{fontSize: '18px'}}>(preprogrammed time locked contracted).</p>
                        
                    </div>
                    <div className='road-mt' style={{paddingBottom:'30px'}}>
                        <p style={{paddingRight:'15px'}}>Connection SigmaChan</p>
                        
                        <p>and</p>
                        <p>SigmaCrush.</p>
                        <p >Launch NFT Collection 4.</p>
                        </div> 

                    </div>

            </div>

            <h2 style={{paddingLeft: '300px', paddingBottom:'10px', color: 'white'}}>2023</h2>
            <div className='road-mobile-container'>
          

                    <div className='road-mobile-text-cont'>
                    <div className='road-mt' style={{paddingBottom: '25px'}}>
                        <p style={{paddingRight:'20px'}}>Integration to the MeseVerse.</p>
                        <p>SigmaVerse Wallet.</p>
                    </div>
                    {/* <div className='road-mt' style={{paddingBottom: '35px'}}></div>
                    <div className='road-mt' style={{paddingBottom: '45px'}}></div>
                    <div className='road-mt'></div>  */}

                    </div>
                          <div>
                    <div>
                      <img style={{maxWidth:'78px'}} src={RMBGMobile0} alt="" />  
                    </div>
                              
                </div>

            </div>
        </div>
    )
}
