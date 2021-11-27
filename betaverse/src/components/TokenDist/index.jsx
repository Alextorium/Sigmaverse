import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../TokenDist/TokenDistribution.css'

export default function TokenDistribution() {
    
    return (
        <div className='token-container'>
            <div className='token-distribution'>
                <div className='progress-container'>
                    <h1>Mahalo</h1>
                <p>sdasdasdasdasdas</p>
                <ProgressBar animated  now={99} />
                <p>sdadasdasd</p>
                <ProgressBar animated   now={80} />
                <br />
                <h1>aloha</h1>
                <p>Token somwething</p>
                <ProgressBar animated now={35} />
                <p>stats </p>
                <ProgressBar animated now={15} />
                <p>cosas</p>
                <ProgressBar animated now={69} />
                <p>mas cosas</p>
                <ProgressBar animated now={10} />
                <p>even more things</p> 
                <ProgressBar animated now={8} />
                <p>uwu obviusly</p>
                <ProgressBar animated  now={1} />
                </div>
                <br />
            </div>


            
        </div>
    )
}
