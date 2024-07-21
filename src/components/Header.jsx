import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector,useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

function Header() {
    const {wishlist}=useSelector(state=>state.wishlistReducer)
    const cart=useSelector(state=>state.cartReducer)

    const dispatch=useDispatch()
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >
                    <Link to='/' className='text-decoration-none text-dark' />
                    <i className='fa-solid fa-cart-shopping ' style={{ color: '#000000' }}></i>
                    Reduxcart
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link className='btn border border-dark me-3' > 
                            <input className='form-control' onChange={(e)=>{dispatch(searchProduct(e.target.value.toLowerCase()))}} type="text" placeholder='Enter keyword for searching'/>
                        </Nav.Link>

                        <Nav.Link className='btn border border-dark me-3 mt-3' >
                            <Link to={'/wish'} className='text-decoration-none text-dark'>
                                <i className='fa-solid fa-heart me-1' style={{ color: '#f604c2' }}></i>
                                Wishlist
                                <Badge bg='info' className='ms-1'>{wishlist?.length}</Badge>
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='btn border border-dark mt-3' >
                            <Link to={'/cart'} className='text-decoration-none text-dark'>
                                <i className='fa-solid fa-cart-shopping me-1' style={{ color: '#f00' }}></i>
                                Cart
                                <Badge bg='warning' className='ms-1'>{cart?.length}</Badge>
                            </Link>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header