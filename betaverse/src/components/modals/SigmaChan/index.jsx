import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function SigmaChan(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body className='font-face-MSB' style={{backgroundColor:'black', color: "white"}}>
          <h4>SigmaChan</h4>
          <p>
          The first anonymous, censorship free and AI moderated social media in the metaverse! With SigmaChan you can share pictures, thoughts and short messages. The content is moderated by the SigmaVerse DAO which enables it to avoid forbidden content. As a result SigmaChan completely and utterly avoid any kind of censorship that are implemented by former colleagues in centralized plattforms. Dialectic currently is our right side project, we developed SigmaChan as a proof that AI indeed can be used to moderate and filter out inappropriate material.
          </p>
        </Modal.Body>
        
      </Modal>
    )
}
