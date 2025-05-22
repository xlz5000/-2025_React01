import { useEffect, useState } from "react";

export default function EffectTest04() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // API 호출
    fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 오류");
        }
        return response.json(); // 응답 데이터를 JSON 형태로 변환,
      })
      .then((data) => {
        // console.log(data)
        return setData(data.slice(0, 3));
      }); // 0-3까지 (3은 포함하지 않는다.)
  }, []);

  return (
    <div>
      <ul>
        {data.map((k) => {
          return (
            <li key={k.id}>
              <h3>{k.name}</h3>
              <p>가격 : {k.price}</p>
              <img src={k.image_link} width="100px" alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
