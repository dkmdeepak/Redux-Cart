import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import { loadEnv } from 'vite'
import { useDispatch } from 'react-redux'
import { addToWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Details() {
  const [data, setdata] = useState([])
  const { id } = useParams()

  const dispatch = useDispatch()


  useEffect(() => {
    console.log(id);
    setdata(JSON.parse(localStorage.getItem("response")).find(item => item.id == id))
  },[])
  console.log(data);
  return (
    <>
      <div className="p-5 container">
        <Row>
          <Col sm={12} md={6} lg={6}> 
            <img src={data?.thumbnail} className='img-fluid'
              alt="" height={'500px'} />
          </Col>
          <Col sm={12} md={6} lg={6} className='p-5'>
            <div className="mb-3">Product id : {data?.id}</div>
            <h1 className="mb-1">{data?.title}5</h1>
            <div className="mb-3">
              <span>₹ {data?.price}</span>
            </div>
            <p style={{ textAlign: 'justify' }}>{data?.description}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-lg border" onClick={()=>{dispatch(addToWishList(data))}} >

                <i className="fa-solid fa-heart-circle-plus" style={{ color: '#fd0896' }}></i>

              </button>
              <button className="btn btn-lg border" onClick={()=>{dispatch(addToCart(data))}}>

                <i className="fa-solid fa-cart-plus" style={{ color: '#4dfd0d' }}></i>

              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Details