import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Contactus = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Container fluid >
        <Card.Title className=' text-center   display-1 mt-5 ml-5'>CONTACT US</Card.Title>

        <div className="row mt-5 d-flex justify-content-center">
          <div className=" h5 col-6  mt-2">If you would like to make or edit a booking, please <Link className='link' as={Link} to="/login">log in</Link> or <Link className='link' as={Link} to="/register">register</Link> first. If you have any other questions or queries a member of staff will always be happy to help. Feel free to
            contact us by telephone or email and we will be sure to get back to you as soon as possible.<br></br>
            Email: MyKitchen@gmail.com<br></br>
            Phone Number : +44xxxxxxxx
          </div>








        </div>



      </Container>
    </>
  )
}

export default Contactus