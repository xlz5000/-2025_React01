import { useEffect, useState } from "react";

export default function FetchEx01() {
  const [temp, setTemp] = useState("");
  // 서버에서 온도 가져오기 (맨 처음만 가져오기)
  useEffect(() => {
    // fetch('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
    // .then(response => console.log(response))

    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270"
    )
      .then((response) => response.json())
      .then((jsonResult) => {
        setTemp(jsonResult.main.temp);
      });
  }, []);
  return (
    <div>
      <p>온도 : {temp}</p>
    </div>
  );
}
