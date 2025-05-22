import { Link } from "react-router-dom";
import "./Menu.css";

// 라우터라 URL(주소경로)을 기준으로 어떤 컴포넌트를 화면에 보여줄지를 결정해주는 역할을 한다.
// 1. 설치 ; 터미널 npm install react-router-dom
// 2. App.js 에서 <BrowserRouter> <해당 컴포넌트=Main></BrowserRouter>
// 3. URL(주소경로)에 맞는 컴포넌트 지정하기
//   <BrowserRouter>
//   <Menu />
//   <Routes>
//       <Route path="/" element={<Home /> } />
//       <Route path="/first" element={<First />} />
//       <Route path="/second" element={<Second />} />
//   </Routes>
//   </BrowserRouter>

export default function Menu() {
  return (
    <nav className="nav">
      <ul>
        <li className="lineStyle">
          {/* <a href='/'>Home</a> */}
          <Link to="/">홈</Link>
        </li>
        <li className="lineStyle">
          {/* <a href='/first'>첫번째</a> */}
          <Link to="/first">첫번째</Link>
        </li>
        <li className="lineStyle">
          {/* <a href='/second'>두번째</a> */}
          <Link to="/second">두번째</Link>
        </li>
      </ul>
    </nav>
  );
}
