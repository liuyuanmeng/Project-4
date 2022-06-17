import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import booktable from '../images/booktable.gif'
import menu from '../images/menu.jpeg'
import order from '../images/Order.jpeg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




const Home = () => {

  const settingsSingle = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  }


  return (

    <Container fluid >
      <Row className = 'slider'>
        <Slider {...settingsSingle} className='big-slider'>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-restaurants-1653384324.png?resize=768:*" />
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tbn-holder-1642752443.jpg?resize=768:*" />
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/restaurant-story-1580379434.png?resize=768:*" />
        </Slider>
      </Row>
      <Row>
        <Col className='mb-4' >
          <Card>
            <Link as={Link} to="/bookings">

              <img src={booktable} />
            </Link>
          </Card>
        </Col>
        <Col  className='mb-4' >
          <Card>
            <Link as={Link} to="/dishes">

              <img src={menu} />
            </Link>

          </Card>
        </Col>
        <Col  className='mb-4' >
          <Card>
            <a href="https://deliveroo.co.uk/" target="_blank" rel="noreferrer">

              <img src={order} />
            </a>
          </Card>
        </Col>
      </Row>






    </Container>




  )
}

export default Home