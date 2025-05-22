import { useState } from "react";
import Child from "./Child";

export default function NonUseCallBackEx() {
  const [count, setCount] = useState(0);
  // 화살표함수를 사용
  const handleClick = () => {
    console.log("클릭!");
  };
  return (
    <div>
      <h2>useCallBack 없이</h2>
      <p>카운트 : {count} </p>
      <button onClick={() => setCount(count + 1)}>부모카운트 증가</button>
      <Child onClick={handleClick} />
    </div>
  );
}
