import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Authentication/login/Login';
import Register from './Pages/Authentication/Register/Register';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/CheckoutRege';
import CheckoutSuccess from './Pages/Checkout/success/CheckoutSuccess';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/footer';
import Showdetails from './Pages/ShowDetails/Showdetails';

function App() {
  return (
    <div >
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/services' element={<Services></Services>} ></Route>
          <Route path='/service/:serviceId' element={<Showdetails></Showdetails>} ></Route>
          <Route path='/blog' element={<Blog></Blog>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          } ></Route>
          <Route path='/checkoutSuccess' element={<CheckoutSuccess></CheckoutSuccess>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
