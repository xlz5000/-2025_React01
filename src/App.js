import "./App.css";
import FethEx01 from "./pages/step24/FetchEx01";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/step23/Home";
import First from "./pages/step23/First";
import Second from "./pages/step23/Second";
import Menu from "./pages/step23/Menu";
import Third from "./pages/step23/Third";
import { useState } from "react";
import Fourth from "./pages/step23/Fourth";
import FetchEx02 from "./pages/step24/FetchEx02";
import FetchEx03 from "./pages/step24/FetchEx03";
import MovieList from "./pages/step25/MovieList";
import MovieList2 from "./pages/step26/MovieList";
import MovieDetail from "./pages/step26/MovieDetail";

function App() {
  const [data, setData] = useState([
    { title: "영화0", img: "movie0.jpg" },
    { title: "영화1", img: "movie1.jpg" },
    { title: "영화2", img: "movie2.jpg" },
    { title: "영화3", img: "movie3.jpg" },
    { title: "영화4", img: "movie4.jpg" },
    { title: "영화5", img: "movie5.jpg" },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/first"
            element={<First msg="리엑트의 세계에 오신 것을 환영합니다." />}
          />
          <Route path="/second" element={<Second msg="환영합니다." />} />
          <Route path="/third" element={<Third data={data} />} />
          <Route path="/fourth/:idx/:name" element={<Fourth data={data} />} />
          <Route path="/fetchEx01" element={<FethEx01 />} />
          <Route path="/fetchEx02" element={<FetchEx02 />} />
          <Route path="/fetchEx03" element={<FetchEx03 />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/movielist2" element={<MovieList2 />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
