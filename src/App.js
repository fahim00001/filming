import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Authentication/login/Login';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          {/* <Route path='/services' element={<Services></Services>} ></Route> */}
          <Route path='/blog' element={<Blog></Blog>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
