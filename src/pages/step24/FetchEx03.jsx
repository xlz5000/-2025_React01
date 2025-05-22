import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchEx03() {
  const [temp, setTemp] = useState("");

  // 비동기 통신 (async , await)
  const getData = async () => {
    // Axios는 서버와 데이터를 주고 받을 때 자수 사용하는  HTTP 클라이언트 라이브러리
    // fetch 보다 사용이 쉽고 기능도 강력해서 많이 사용된다.(자동으로 json 처리해준다.)
    // 설치 : npm install axios
    // axios.get(url), axios.post(url, data), axios.put(url, data), axios.delete(url)

    await axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270"
      )
      .then((response) => {
        setTemp((response.data.main.temp - 273.15).toFixed(2) + " °C"); // 캘빈 -> 섭씨 변환
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>온도 : {temp}</p>
    </div>
  );
}
