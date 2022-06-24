
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'


import { getTokenFromLocalStorage } from '../helpers/auth'

const Booking = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: 0,
    number_of_guests: 2,
    Date: null,
    time: null,
    location: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/bookings/', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate('/bookings')
    } catch (err) {
      console.log(err)
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const [selectedDate, setSelectedDate] = useState(null)

  const [bookings, setBookings] = useState([])
  useEffect(() => {
    const getBookings = async () => {
      try {
        const { data } = await axios.get('/api/bookings/', {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },


        })
        setBookings(data)


      } catch (error) {
        console.log(error)

      }

    }
    getBookings()
  }, [navigate])

  return (

    <>
      <div className="d-grid gap-2">
        <Button variant="outline-secondary" size="lg" onClick={handleShow}>
          Make a booking enquiry
        </Button>
      </div>



      <Modal show={show} onHide={handleClose} className='formContainer'>
        <Modal.Header closeButton>
          <Modal.Title >Booking Form </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          {/* <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}> */}
          <Form className='formContainer' onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="John"
                autoFocus
                value={formData.name} onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="John@example.com"
                autoFocus
                value={formData.email} onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                name="phone"
                // placeholder="+44xxxxxxx"
                autoFocus
                value={formData.phone} onChange={handleChange}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control
                type="number_of_guests"
                name="number_of_guests"
                placeholder="2"
                autoFocus
                value={formData.number_of_guests} onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              {/* <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                format='yyyy/mm/dd'
              /> */}

              <Form.Control
                type="Date"
                format='yyyy/mm/dd'
                name="Date"
                autoFocus
                value={formData.Date} onChange={handleChange}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Select className='trigger' name='time' value={formData.time} onChange={handleChange} >
                <option>Please select</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>


              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Select className='trigger' name='location' value={formData.location} onChange={handleChange} >
                <option>Please select</option>
                <option>Hoxton</option>
                <option>Angel</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="secondary" >
              Submit
            </Button>
          </Form>




        </Modal.Body>
        <Modal.Footer >
          <p className="text-center">📧  You will receive confirmation email shortly</p>


        </Modal.Footer>
      </Modal>

      <div className='booking-list mt-5 '>
        <div className='mr-5'>
          <Row className='justify-content-center'>
            {bookings.map(booking => {
              console.log(booking)
              const { id, name, email, phone, Date, time, location } = booking
              return (
                <Col key={id} md="6" lg="4" className='booking mb-4'>
                  <Link to={`/bookings/${id}`}>


                    <Card.Body className='text-center mb-0 text-secondary mt-5 text'>{name} - {Date} - {location.name}</Card.Body>


                  </Link>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </>




  )





}
export default Booking
