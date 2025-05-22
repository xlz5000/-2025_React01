import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function MovieList() {
  // 서버에 갖다가 올때 시간 걸리는 것을 처리하자
  //서버할 때 무조건 axios 사용 예정
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    await axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((response) => {
        const copyMovies = response.data.data.movies;
        setMovies(copyMovies);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h2>영화리스트 페이지 입니다.</h2>
      <div>
        {isLoading
          ? "로딩 중"
          : movies.map((k) => {
              return (
                <Movie
                  key={k.id}
                  id={k.id}
                  title={k.title}
                  year={k.year}
                  poster={k.small_cover_image}
                  genres={k.genres}
                />
              );
            })}
      </div>
    </div>
  );
}
