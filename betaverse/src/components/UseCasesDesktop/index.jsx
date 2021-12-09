import React from 'react'
import './UseCasesDesktop.css'
import {Button} from 'react-bootstrap'
export default function UseCasesDesktop() {
    return (
        <div id='usecases' className='desktop font-face-MSR'>
            <div>
            <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight:'1000px' }}>Use Cases</h2>
            </div>
            <br />
            <div style={{display: 'flex'}}>
             <div className='usecased1'>
                <h3 style={{color:'white', fontSize:'35px'}}>SigmaChan</h3>
                <img className='imguses' src="https://placekitten.com/275/400" alt="" />
                <Button className='download-cases-btn'>Download SigmaChan</Button>
            </div>
            <div className='usecased2'>
            <h2 style={{color:'white', fontSize:'35px'}}>SigmaCrush</h2>
                <img className='imguses'src="https://placekitten.com/275/400" alt="" />
                <Button className='download-cases-btn'>Download SigmaCrush</Button>
                
            </div>   
            </div>
            
        </div>
    )
}
