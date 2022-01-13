import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function SigmaCrush(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >

        <Modal.Body className='font-face-MSB' style={{backgroundColor:'black', color: "white"}}>
          <h4>SigmaCrush</h4>
          <p>
          SigmaCrush is passionate about opening up the world of social interactions to more meaningful and fulfilling ones. What if the empty promises of superficial dating apps could be replaced with a much more meaningful connection based on different criteria like your interests? Indeed, our app has been designed to provide users with fascinating talks at work or in the MetaVerse, as well as real-life meetings in potentially romantic places.
          </p>
        </Modal.Body>
  
      </Modal>
    )
}
