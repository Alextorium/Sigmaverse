import React, { useState} from 'react'
import { Modal, Card } from 'react-bootstrap'
import './Faqs.css'
import faqs from './faqs.json'

export default function Faqs() {


  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  

//   const faqs = [
//       {
//           title: 'Question 1',
//           answers: 'Answer: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est hic autem ratione cum magni quis officiis'
//       },
//       {
//           title:' Question 2',
//           answers: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam ipsa odio? Omnis, eos error. Reprehenderit quae aliquam provident, illo repellat eveniet consequuntur eaque ut quam iure modi quo blanditiis!'
//       },
//       {
//           title:' Question 3',
//           answers: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam ipsa odio? Omnis, eos error. Reprehenderit quae aliquam provident,'
//       },
//       {
//           title:' Question 4',
//           answers: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. !'
//       }
//   ]

  return (
    <div id='faqs' className='font-face-MSR ' >
        <h2 id='faqsmobile'  className='faq-title'>FAQs</h2>

    <div className='faq-desktop'style={{backgroundColor: 'black', borderColor: 'white', borderRadius: '15px', minWidth:'330px'}} >
        <div className='frequently-asked'>
        <h3 className='padding-ask'>Frequently </h3>
        <h3 >Asked Questions</h3>    
        </div>
        
        <Card.Body >
      <p className='faq-list-item' onClick={() => setFaq1(true)}>Question 1</p>{' '}
      <div className='desktop' style={{minWidth: '1063px', borderColor: 'white', borderWidth: '2px', borderStyle: 'solid', borderBottom: '1' }}></div>
      <p className='faq-list-item' onClick={() => setFaq2(true)}>Question 2</p>
      <div className='desktop' style={{minWidth: '1063px', borderColor: 'white', borderWidth: '2px', borderStyle: 'solid', borderBottom: '1' }}></div>
      <p className='faq-list-item' onClick={() => setFaq3(true)}>Question 3</p>{' '}
      <div className='desktop' style={{minWidth: '1063px', borderColor: 'white', borderWidth: '2px', borderStyle: 'solid', borderBottom: '1' }}></div>
      <p className='faq-list-item' onClick={() => setFaq4(true)}>Question 4</p>    
      <div className='desktop' style={{minWidth: '1063px', borderColor: 'white', borderWidth: '2px', borderStyle: 'solid', borderBottom: '1' }}></div>
        <br />
 
        </Card.Body>
        
<br />
    </div>
      



      <Modal
        size="sm"
        show={faq1}
        onHide={() => setFaq1(false)}
        
      >
        <Modal.Header className='modal-design' closeButton>
          <Modal.Title >
           <p > {faqs[0].title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-design'>
            {faqs[0].answers}
            
        </Modal.Body>
      </Modal>


      <Modal
        size="sm"
        show={faq2}
        onHide={() => setFaq2(false)}
        
      >
        <Modal.Header className='modal-design' closeButton>
          <Modal.Title >
          <p >{faqs[1].title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  className='modal-design' >
        <p > {faqs[1].answers}</p>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={faq3}
        onHide={() => setFaq3(false)}
        
      >
        <Modal.Header  className='modal-design' closeButton>
          <Modal.Title >
          <p> {faqs[2].title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-design' >
        <p > {faqs[2].answers}</p>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={faq4}
        onHide={() => setFaq4(false)}
        
      >
        <Modal.Header  className='modal-design' closeButton>
          <Modal.Title >
          <p> {faqs[3].title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  className='modal-design' >
        <p> {faqs[3].answers}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

