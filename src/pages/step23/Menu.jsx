import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <nav className="nav">
      <ul>
        <li className="lineStyle">
          <Link to="/">홈</Link>
        </li>
        <li className="lineStyle">
          <Link to="/first">첫번째</Link>
        </li>
        <li className="lineStyle">
          <Link to="/second">두번째</Link>
        </li>
        <li className="lineStyle">
          <Link to="/third">세번째</Link>
        </li>
        <li className="lineStyle">
          <Link to="/fetchEx01">온도-1</Link>
        </li>
        <li className="lineStyle">
          <Link to="/fetchEx02">온도-2</Link>
        </li>
      </ul>
    </nav>
  );
}
