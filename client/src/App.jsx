import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Seller from './pages/Seller'
import CategoryProduct from './pages/CategoryProduct'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <div className=" ">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path='/dang-ky' element={<Signup />} />
              <Route path='/dang-nhap' element={<Login />} />
              <Route path='/dang-ban' element={<Seller />} />
              <Route path='/:slug' element={<CategoryProduct />} />
              <Route path='/oreka/:slug' element={<ProductDetail />} />
            </Route>
          </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App
