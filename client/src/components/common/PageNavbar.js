import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { userIsAuthenticated } from '../helpers/auth'
import { VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'

const PageNavbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  const [term, setTerm] = useState('')
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate()

  const handleLogout = () => {

    window.localStorage.removeItem('project-4')

    navigate('/dishes')
  }



  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to='/'>My Kitchen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {userIsAuthenticated() ?
                <>
                  <Nav.Link as={Link} to="/bookings">Booking</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
                :
                <>

                  <Nav.Link as={Link} to="/dishes">Menu</Nav.Link>


                  <Nav.Link href="https://deliveroo.co.uk/" target="_blank" rel="noreferrer"> Order Online</Nav.Link>
                  <Nav.Link as={Link} to="/find-us">Find Us</Nav.Link>
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/locations">Locations</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/story">Story</NavDropdown.Item>


                  </NavDropdown>
                </>
              }
            </Nav>

            <IconButton icon={colorMode === 'light' ? <FaRegSun /> : <FaRegMoon />} isRound='true' size='sm' alignSelf='flex-end' ml='3.5'
              onClick={toggleColorMode}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>









    </>



  )
}

export default PageNavbar


