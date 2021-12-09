import React from 'react'
import RoadMapD22 from '../assets/RM2022.png'
import RoadMapD23 from '../assets/RM2023.png'
import './RoadMap.css'

export default function RoadMapDesktop() {
    return (
        <div id='roadmap' className='desktop font-face-MSR'>
            <div id='roadmapcontainer'>
             <h2  className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '1000px', paddingBottom:'20px'}}>ROADMAP</h2>   
             <div className='rm-22' style={{color: 'white'}}>
              <img className='roadMap' src={RoadMapD22} alt="" /> 
              <div className='flex-container'>
                  <div className='rm-text-container'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, nihil nobis! Ut expedita facilis aliquid repellat quam eligendi, hic quidem? Corrupti dolorem alias officiis tempore. At ullam molestias architecto dolor!</p>
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

             <br />
             
             <div className='rm-23' style={{color: 'white'}}>
              <img src={RoadMapD23} alt="" />   
              <div className='flex-container'>
                  <div className='rm-text-container'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, nihil nobis! Ut expedita facilis aliquid repellat quam eligendi, hic quidem? Corrupti dolorem alias officiis tempore. At ullam molestias architecto dolor!</p>
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
             
            </div>
            <br />
        </div>
    )
}
