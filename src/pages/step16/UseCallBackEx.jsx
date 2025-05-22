import { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallBackEx() {
  const [count, setCount] = useState(0);
  // 자식컴포넌트에 넘어가는 함수에 useCallback 사용
  // 부모컴포넌트가 렌더링 해도 자식 컴포넌트는 랜더링 하지 않음
  const handleClick = useCallback(() => {
    console.log("클릭!");
  }, []);
  return (
    <div>
      <h2>useCallBack 사용</h2>
      <p>카운트 : {count} </p>
      <button onClick={() => setCount(count + 1)}>부모카운트 증가</button>
      <Child onClick={handleClick} />
    </div>
  );
}
