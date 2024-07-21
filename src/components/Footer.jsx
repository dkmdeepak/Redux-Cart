import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div>
        <div className='d-flex justify-content-between bg-dark text-light p-5'>
          <div className="w-25">
            <h3>Reduxcart</h3>
            <p style={{ textAlign: 'justify' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
          </div>
          <div className="w-25 text-center">
            <h3>Links</h3>
            <Link to={'/wish'} className='d-block mb-3 mt-3'>Wishlist</Link>
            <Link to={'/cart'} >Cart</Link>
          </div>
          <div className="w-25">
            <h3>References</h3>
            <a href="https://react-bootstrap.github.io/" className='d-block mt-3 mb-3'> React Bootstrap</a>
            <a href="https://react-bootstrap.github.io/" className='d-block  mb-3'> React </a>
            <a href="https://redux.js.org/" > Redux </a>
          </div>
          <div className="w-25">
            <h3>Contact Us</h3>
            <p>Submit your email, so we can contact you...</p>
            <input type="email" className='form-control' placeholder='Enter Your email Id' />
            <button className="btn btn-outline-light mt-3">Submit</button>
          </div>
        </div>
        <h6 className="text-center">Reduxcart 2024 &copy; All rights reseved.</h6>

      </div >
    </>
  )
}

export default Footer