import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, emptyCart, incQuantity, decQuantity } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const cart = useSelector(state => state.cartReducer)
  // console.log(cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(emptyCart())
    alert("Every items checkedout")
    navigate('/')
  }

  const handleDecrese = (product) => {
    if (product.quantity == 1) {
      dispatch(removeFromCart(product?.id))
    }
    else {
      dispatch(decQuantity(product?.id))
    }
  }

  return (
    <>
      <div className="container p-5">
        <Row>
          <Col sm={12} md={8}>
            <h3>Cart summary</h3>
            {
              cart?.length > 0 ?
                <table className="table table-bordered shadow">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Product name</th>
                      <th>Product image</th>
                      <th>Product price</th>
                      <th>Product quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart?.map(item => (
                        <tr>
                          <td>{item?.id}</td>
                          <td>{item?.title}</td>
                          <td><img height={'180px'} width={'250px'} src={item?.thumbnail} alt="" /></td>
                          <td>{item?.price}</td>
                          <td>
                            <button className='btn btn-lg' onClick={() => { dispatch(incQuantity(item?.id)) }}>+</button>
                            <input type="text" name='' value={item?.quantity} className='form-control' />

                            <button className='btn btn-lg' onClick={() => { handleDecrese(item) }}>-</button>
                          </td>
                          <td>
                            <button className='btn' onClick={() => { dispatch(removeFromCart(item?.id)) }}>
                              <i className="fa-solid fa-trash" style={{ color: '#f00a0a' }}></i>
                            </button>
                          </td>
                        </tr>

                      ))
                    }

                  </tbody>
                </table>
                :
                <h3>
                  No cart item
                </h3>

            }

          </Col>
          <Col sm={12} md={4}>
            <div className="border shadow p-6 mt-5">
              <h3>Total products : <span className='text-info'>{cart?.length}</span></h3>
              <h4>Total amount : <span className='text-warning'>{
                cart?.length > 0 ?
                  cart?.map(item => item.quantity * item.price).reduce((total, item) => total + item)
                  :
                  0
              }</span></h4>
            </div>
            <div className="d-grid mt-5">
              <button className="btn btn-block" onClick={handleCheckout} style={{ background: '#18cc3c' }}>CheckOut</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart