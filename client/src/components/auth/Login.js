import Button from 'react-bootstrap/esm/Button'
import React from 'react'
// import htmlForm from 'react-bootstrap/htmlForm'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import { Container, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  const [googleLogin, setGoogleLogin] = useState(null)

  useEffect(() => {
    const googleGoogle = async () => {
      try {
        const response = await axios.post('/api/auth/login/', {
          email: googleLogin.profileObj.email,
          password: googleLogin.tokenObj.login_hint,
        })
        window.localStorage.setItem('project-4', response.data.token)
        history.push('/')
      } catch (err) {
        console.log('user does not exist')
      }
    }
    googleGoogle()
  }, [googleLogin])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('project-4', token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const response = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(response.data.token)
      navigate('/bookings')
    } catch (error) {

      setErrors(error.response.data.message)
    }


  }



  return (
    <>
      {/* <Container fluid className='mt-5'> */}
      <Row  className='mt-5 mb-0'>

        <Col md="4" lg="4" className='location mb-4'>
          <Card>
            <img src="https://media.houseandgarden.co.uk/photos/6189499f9b2ce0e907b86b68/master/w_2580%2Cc_limit/rochelle.jpg" />
            <div className="centered">Angel</div>

          </Card>
        </Col>
        <Col md="4" lg="4" className='location mb-4'>
          <Card>
            <img src="https://media.houseandgarden.co.uk/photos/6189406c7ec4df9dbbfec1a6/master/w_2580%2Cc_limit/elystan.jpg" />
            <div className="centered">Hoxton</div>

          </Card>
        </Col>
        <Col md="4" lg="4" className='location mb-4'>
          <Card>
            <img src="https://media.houseandgarden.co.uk/photos/6189406bd9ae96d083cd0d74/master/w_2580%2Cc_limit/2018_03_27_leroy_89720.jpg" />
            <div className="centered">Coming soon</div>

          </Card>
        </Col>





      </Row>


      <div className='masthead  d-flex justify-content-center'>
        <Form className='rounded p-4 p-sm-3 text-secondary w-50 mt-5 ' onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Row className="mb-3 form-label">
              <Row>

                <h3 className='login-heading'>LOGIN  </h3>

              </Row>

              <Form.Group className='mb-3'>

                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" value={formData.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group className='mb-3'>

                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange} />
                {errors && <p className='text-danger'>{errors}</p>}
              </Form.Group>

              <Form.Group className='mb-3'>
                <Button className='button-login btn btn-secondary' type="submit">
                  Login
                </Button>
              </Form.Group>
            </Row>
          </Form.Group>
        </Form>
      </div>




      {/* </Container > */}
    </>








  )
}

export default Login