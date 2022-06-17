import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import ReactPlayer from 'react-player'


const Story = () => {
  return (
    <Container fluid >
      <Card.Title className=' text-center  display-1 mt-5 ml-5'>Story About Us</Card.Title>
      <div className='Story'>
        <ReactPlayer controls url='https://www.youtube.com/watch?v=M7zymqrxrQA'/>


      </div>

    </Container>
    
     
      
    
  )
}

export default Story