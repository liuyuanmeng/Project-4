import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit'

export default function App() {
  return (
    <MDBFooter className='text-center text-white footer ' style={{ backgroundColor: '#353b40' }}>
      {/* <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            
            <Link className='link' as={Link} to="/register">
              <button type='button' className='btn btn-outline-light btn-rounded'>
                Register with us to make your first booking!
              </button>
            </Link>
          </p>
        </section>
      </MDBContainer> */}

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' target="_blank" rel="noreferrer" href='https://github.com/liuyuanmeng'>
          YuanMeng Liu
        </a>
      </div>
    </MDBFooter >
  )
}