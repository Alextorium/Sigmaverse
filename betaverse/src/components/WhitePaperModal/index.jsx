import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import './WhitePaper.css'
export default function WhitePaperModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modalWP'
        
      >
        {/* <Modal.Header closeButton className='modalTitle'>
          <Modal.Title id="contained-modal-title-vcenter" className='modalTitle'>
            
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='modalBody font-face-MSB'>
          <h4>News #1</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ex laboriosam labore odio dignissimos praesentium doloremque dolores magnam corrupti est in maiores animi culpa fugiat vel mollitia, quidem modi. Aspernatur!


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsam fugit ea iure voluptatem aliquid, rerum necessitatibus qui id quis quasi totam. Laudantium, optio cupiditate! Rerum eveniet aut dolores excepturi?
          </p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

