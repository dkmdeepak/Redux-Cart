
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wish' element={<Wishlist/>}/>
        <Route path='/*' element={<Home/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
