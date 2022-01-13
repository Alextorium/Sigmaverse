import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function SigmaNFT(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >

        <Modal.Body className='font-face-MSB' style={{backgroundColor:'black', color: "white"}}>
          <h4>SigmaNFT</h4>
          <p>
          The SigmaVerse is a brave new place full of degenerate universes, find it. The fun begins when you create your own NFT, one that is guaranteed to be uglier than anything else its creators have minted together (and most of them are degenerates).
          </p>
        </Modal.Body>
       
      </Modal>
    )
}
