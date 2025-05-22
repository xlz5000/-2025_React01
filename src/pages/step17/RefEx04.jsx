import { useRef, useState } from "react";

export default function RefEx04() {
  console.log("Ref 렌더링");
  const [rander, setRender] = useState(0);
  const countRef = useRef(0);

  let countVar = 0;

  const refPlus = () => {
    countRef.current = countRef.current + 1;
    console.log("ref : " + countRef.current);
  };

  const varPlus = () => {
    countVar = countVar + 1;
    console.log("var : " + countVar);
  };

  const doRander = () => {
    setRender(rander + 1);
  };
  const printResult = () => {
    console.log("ref : " + countRef.current + ",  var : " + countVar);
  };
  return (
    <div>
      <p>Ref : {countRef.current} </p>
      <p>var : {countVar} </p>
      {/* 둘다 렌더링을 하지 않는다. */}
      <button onClick={refPlus}>Ref 올려</button>
      <button onClick={varPlus}>var 올려</button>
      {/* 렌더링 시 ref는 값을 기억했다가 결과로 나온다.
                일반변수에 저자한 var는 렌더링시 초기화 된다. */}
      <button onClick={doRander}>렌더링</button>
      <button onClick={printResult}>결과출력</button>
    </div>
  );
}
