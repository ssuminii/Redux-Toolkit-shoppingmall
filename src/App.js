import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

// 1. 전체 상품페이지, 상품 상세페이지, 로그인 페이지
// 1-1. Navigation Bar
// 2. 전체 상품페이지 -> 전체 상품 볼 수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지
// 3. 상품 디테일을 눌렀으나, 로그인이 안되어있을 경우 로그인 페이지가 먼저 나옴
// 4. 로그인이 되어있을 경우 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5. 로그아웃 되면 상품 디테일 페이지를 볼 수 없다. (다시 로그인 페이지가 보임)
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃이 되면 로그인이 보인다.
// 7. 상품을 검색할 수 있다. 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
