import { useEffect, useState } from "react";

export default function FetchEx02() {
  const [temp, setTemp] = useState("");

  // 비동기 통신 (async , await)
  const getData = async () => {
    await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270"
    )
      .then((response) => response.json())
      .then((jsonResult) => {
        setTemp(jsonResult.main.temp);
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
