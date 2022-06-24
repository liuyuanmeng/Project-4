import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import { Container, Card } from 'react-bootstrap'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'



const Location = ({ name, ...props }) => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <Container fluid >

      <Row className='location mt-4'>

        <Col md="6" lg="4" className='location mb-4'>

          <Card>
            <img src="https://media.houseandgarden.co.uk/photos/6189499f9b2ce0e907b86b68/master/w_2580%2Cc_limit/rochelle.jpg" />
            <div className="centered">Angel</div>

          </Card>


        </Col>


        <Col md="6" lg="4" className='location mb-4'>

          <Card>
            <img src="https://media.houseandgarden.co.uk/photos/6189406c7ec4df9dbbfec1a6/master/w_2580%2Cc_limit/elystan.jpg" />
            <div className="centered">Hoxton</div>

          </Card>


        </Col>






        <Col md="6" lg="4" className='location mb-4'>
          <Card>
            <img src="https://media.houseandgarden.co.uk/photos/6189406bd9ae96d083cd0d74/master/w_2580%2Cc_limit/2018_03_27_leroy_89720.jpg" />
            <div className="centered">Coming soon</div>

          </Card>
        </Col>
      </Row>


      <Row  className="m-auto align-self-center">
        <Card className='text-center' style={{ width: '180rem' }}>
          {/* <Col md="6" lg="4" className='time'> */}
          <h1 className=' mt-5 display-3'>Opening Hours</h1>
          <h3 className='mt-2'>Wednesday  12:00-23:00</h3>
          <h3 className='mt-2'>Thursday  12:00-23:00</h3>
          <h3 className='mt-2'>Friday  12:00-23:00</h3>
          <h3 className='mt-2'>Saturday  12:00-23:00</h3>
          <h3 className='mt-2'>Sunday  12:00-23:00</h3>

          <div className='moveup'> <Button variant="secondary mt-1" onClick={handleShow}> Click Here To Find Us On Google Maps</Button> </div>
          
          <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>You can find our maps in here</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=angel%20station&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div>
              <div><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Hoxton%20station&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div>
            </Offcanvas.Body>
          </Offcanvas>
          {/* </Col> */}
        </Card>
      </Row>



    </Container>
  )
}

export default Location