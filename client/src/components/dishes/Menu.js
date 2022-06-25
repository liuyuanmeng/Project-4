import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, Row, Card, Col } from 'react-bootstrap'
import Slider from 'react-slick'



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
    <Container fluid >
      <Row  className='moveup'>
        {dishes.map(dish => {
          const { id, name, price, image, foodtype } = dish
          console.log(image)
          return (
            <Col key={id} md="6" lg="4" className='mb-4'>

              <Card>
                <Card.Img className = 'card-img' variant="top" src={ image } />
                <Card.Body className='bg-light'>
                  <Card.Title className='text-center mb-0 text-dark'>{name} -  £{price} - {foodtype.name}</Card.Title>
                
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