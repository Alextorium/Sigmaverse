import React from 'react'
import RMBGMobile from '../assets/RmMobile.png'
import RMBGMobile1 from '../assets/RmMobile1.png'
import './RoadMap.css'


export default function RoadMap() {
    return (
        <div id='roadmapmobile' className='mobile font-face-MSR'>
            <div className='title-div'>
                <h3>Road Map</h3>

            </div>
            <h2 style={{paddingRight: '300px', paddingBottom:'10px', color: 'white'}}>2021</h2>
            <div className='road-mobile-container'>
                <div>
                    <div>
                      <img src={RMBGMobile} alt="" />  
                    </div>
                              
                </div>

                    <div className='road-mobile-text-cont'>
                    <div className='road-mt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, nihil nobis! Ut expedita facilis aliquid repellat quam eligendi, hic quidem? Corrupti dolorem alias officiis tempore. At ullam molestias architecto dolor!</div>
                    <div className='road-mt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident facere, nisi quia repellat quasi, quis, ab neque consectetur recusandae incidunt aspernatur eius nemo repudiandae. Enim nesciunt illo quaerat nisi. Nam.</div>
                    <div className='road-mt' style={{paddingBottom: '20px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore fugit quia incidunt magni ipsum dolores blanditiis, perferendis consequatur soluta ipsam omnis quas doloribus iste pariatur repudiandae cupiditate atque sit!</div>
                    <div className='road-mt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sit, ullam ratione blanditiis rem inventore nemo reiciendis quaerat sunt animi asperiores! Repellat asperiores, nostrum sint facilis dolorum aliquam iusto corrupti.</div> 

                    </div>

            </div>

            <h2 style={{paddingLeft: '300px', paddingBottom:'10px', color: 'white'}}>2022</h2>
            <div className='road-mobile-container'>
          

                    <div className='road-mobile-text-cont'>
                    <div className='road-mt' style={{paddingBottom: '25px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, nihil nobis! Ut expedita facilis aliquid repellat quam eligendi, hic quidem? Corrupti dolorem alias officiis tempore. At ullam molestias architecto dolor!</div>
                    <div className='road-mt' style={{paddingBottom: '35px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident facere, nisi quia repellat quasi, quis, ab neque consectetur recusandae incidunt aspernatur eius nemo repudiandae. Enim nesciunt illo quaerat nisi. Nam.</div>
                    <div className='road-mt' style={{paddingBottom: '45px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore fugit quia incidunt magni ipsum dolores blanditiis, perferendis consequatur soluta ipsam omnis quas doloribus iste pariatur repudiandae cupiditate atque sit!</div>
                    <div className='road-mt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sit, ullam ratione blanditiis rem inventore nemo reiciendis quaerat sunt animi asperiores! Repellat asperiores, nostrum sint facilis dolorum aliquam iusto corrupti.</div> 

                    </div>
                          <div>
                    <div>
                      <img style={{maxWidth:'78px'}} src={RMBGMobile1} alt="" />  
                    </div>
                              
                </div>

            </div>
        </div>
    )
}
