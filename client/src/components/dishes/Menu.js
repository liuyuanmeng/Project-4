import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, Row, Card, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Menu = () => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const getData = async () => {


      const { data } = await axios.get('/api/dishes/')
      setDishes(data)

    }
    getData()


  }, [])
  return (
    <Container fluid     className='container-lg'>
      <Row>
        {dishes.map(dish => {
          const { _id, name, price, image, foodtype } = dish
          return (
            <Col key={_id} md="6" lg="4" className='mb-4'>

              <Card>
                <Card.Img className = 'card-img' variant="top" src={image} />
                <Card.Body className='bg-light'>
                  <Card.Title className='text-center mb-0 text-dark'>{name} -  £{price} - {foodtype.name}</Card.Title>
                  {/* if(foodtype.name === 'Vegetrain') return ( v {foodtype.name})
                  else if ( foodtype.name === 'Vegan') return ( vv{foodtype.name} ) */}
                </Card.Body>
              </Card>

            </Col>
          )
        })}
      </Row>
    </Container>


  )


}

export default Menu