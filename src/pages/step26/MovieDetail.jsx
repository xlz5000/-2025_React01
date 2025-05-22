import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  // 서버에 갖다가 올때 시간 걸리는 것을 처리하자
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    await axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((response) => {
        const movies = response.data.data.movies;
        // 숫자 비교
        const movie = movies.find((k) => k.id === Number(id));
        setMovies(movie);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h2>상세 정보</h2>
      {isLoading ? (
        "로딩 중 ...."
      ) : (
        <div>
          {/* <h4>id : {movies.id}</h4> */}
          <h4>title : {movies.title}</h4>
          <h4>year : {movies.year}</h4>
          <img src={movies.small_cover_image} alt={movies.title} />
          <Link to="/">홈으로 이동</Link>
          <Link to="/movielist2">목록 이동</Link>
        </div>
      )}
    </div>
  );
}
