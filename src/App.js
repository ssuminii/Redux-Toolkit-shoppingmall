import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './\broute/PrivateRoute';
import SideMenu from './component/SideMenu';

function App() {
  // true -> Login ⭕️, false -> Login ❌
  const [authenticate, setAuthenticate] = useState(false);

  // 값이 변했는지 chech
  useEffect(() => {
    console.log(authenticate);
  },[authenticate]);

  return (
    <div>
      <div className='sideMenu'>
        <SideMenu authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      </div>
      <div className='navBar'>
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      </div>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login element={<Login />} />} />
        <Route path="/Product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
