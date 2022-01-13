import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function SigmaCharity(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >

        <Modal.Body className='font-face-MSB' style={{backgroundColor:'black', color: "white"}}>
          <h4>SigmaCharity</h4>
          <p>
          We are building a charitable ecosystem called SigmaCharity. Our charity is special in the sense that it is only active when you sell our token, its purpose is to support Non-Profit Organizations that contribute to degenerate society. By selling Sigma tokens you inherently support these NGOs and hopefully revitalize degenerate communities around the globe.
          </p>
        </Modal.Body>
        
      </Modal>
    )
}
