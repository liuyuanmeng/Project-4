import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { userIsOwner, getTokenFromLocalStorage } from '../helpers/auth'

const BookingEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [booking, setBooking] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    number_of_guests: '',
    Date: '',
    time: '',
    location: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const getSingleBooking = async () => {
      try {
        const { data } = await axios.get(`/api/bookings/${id}/`, {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },


        })
        setBooking(data)
        setFormData(data)
        setFormData({ ...data, time: formData.time.slice(0, 6) })


      } catch (error) {
        console.log(error)

      }

    }
    getSingleBooking()
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmitDetails = async (e) => {
    e.preventDefault()
    try {
      const formDataDetails = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        number_of_guests: formData.number_of_guests,
        Date: formData.Date,
        time: formData.time,
        owner: formData.owner.id,
        location: formData.location.id,
      }
      console.log('form', formDataDetails)
      const { data } = await axios.put(`/api/bookings/${id}/`, formDataDetails, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })
      console.log('data', data)

    } catch (error) {
      console.log(error)

    }
  }

  const handleSubmitName = async (e) => {
    e.preventDefault()
    try {

      const formDataName = {
        name: formData.name,
        confirmName: formData.confirmName,

      }

      const { data } = await axios.put(`/api/bookings/${id}/`, formDataName, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }

  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    try {

      const formDataEmail = {
        email: formData.email,
        confirmEmail: formData.confirmEmail,

      }

      const { data } = await axios.put(`/api/bookings/${id}/`, formDataEmail, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }



  const handleSubmitPhone = async (e) => {
    e.preventDefault()
    try {
      const formDataPhone = {
        phone: formData.phone,
        confirmPhone: formData.confirmPhone,

      }

      const { data } = await axios.put(`/api/bookings/${id}/`, formDataPhone, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }
  const handleSubmitNumberOfGuests = async (e) => {
    e.preventDefault()
    try {
      const formDataNumberOfGuests = {
        number_of_guests: formData.number_of_guests,
        confirmNumber_Of_Guests: formData.confirmNumber_Of_Guests,

      }

      const { data } = await axios.put(`/api/bookings/${id}/`, formDataNumberOfGuests, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }

  const handleSubmitDate = async (e) => {
    e.preventDefault()
    try {

      const formDataDate = {
        Date: formData.Date,
        confirmDate: formData.confirmDate,

      }

      const { data } = await axios.put(`/api/bookings/${id}/`, formDataDate, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }

  const handleSubmitTime = async (e) => {
    e.preventDefault()
    try {

      const formDataTime = {
        time: formData.time,
        confirmTime: formData.confirmTime,

      }

      const { data } = await axios.put(`/api/bookings/${id}/`, formDataTime, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }

  const handleSubmitLocation = async (e) => {
    e.preventDefault()
    try {

      const formDataTime = {
        location: formData.location,
        confirmLocation: formData.confirmLocation,

      }

      const { data } = await axios.put(`/api/bookings/${id}/`, formDataTime, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }

  const deleteBooking = async () => {
    try {
      await axios.delete(`/api/bookings/${id}/`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })
      navigate('/bookings')
    } catch (error) {
      console.log(error)


    }
  }



  return (
    <Container fluid className='mt-5'>
      <div className='masthead  d-flex justify-content-center'>

        <div className='w-50'>
          <Form onSubmit={handleSubmitDetails}>
            <Form onSubmit={handleSubmitName}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type=""
                  name=""
                  placeholder=""
                  autoFocus
                  value={formData.name} onChange={handleChange}
                />
              </Form.Group>
            </Form>


            <Form onSubmit={handleSubmitEmail}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type=""
                  name=""
                  placeholder=""
                  autoFocus
                  value={formData.email} onChange={handleChange}
                />
              </Form.Group>
            </Form>


            <Form onSubmit={handleSubmitPhone}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="phone"
                  name="phone"

                  autoFocus
                  value={formData.phone} onChange={handleChange}
                />
              </Form.Group>
            </Form>


            <Form onSubmit={handleSubmitNumberOfGuests}>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control
                  type="number_of_guests"
                  name="number_of_guests"
                  placeholder=""
                  autoFocus
                  value={formData.number_of_guests} onChange={handleChange}
                />
              </Form.Group>
            </Form>


            <Form onSubmit={handleSubmitDate}>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Date</Form.Label>


                <Form.Control
                  type="Date"
                  format='yyyy/mm/dd'
                  name="Date"
                  autoFocus
                  value={formData.Date} onChange={handleChange}
                />
              </Form.Group>
            </Form>

            <Form onSubmit={handleSubmitTime}>

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
            </Form>


            <Form onSubmit={handleSubmitLocation}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Location</Form.Label>
                <Form.Select className='trigger' name='location' value={formData.location.name} onChange={handleChange} >
                  <option>Please select</option>
                  <option>Hoxton</option>
                  <option>Angel</option>
                </Form.Select>
              </Form.Group>
            </Form>

            <Button type="submit" variant="secondary" className='ml-3'>
              Change Booking
            </Button>
            &nbsp;&nbsp;&nbsp;



            <Button type="submit" variant="secondary" className='ml-3' onClick={deleteBooking}>Delete Booking</Button>




          </Form>
        </div>
      </div>
    </Container>


  )






}
export default BookingEdit