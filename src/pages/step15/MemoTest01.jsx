// useMemo는 컴포넌트가 다시 렌더링 될 때 특정 연산의 재계산을 방지하여 성능을 최적화 하기 위해 사용
// useMemo를 사용하면 불필요한 연산을 피하면서 상태 업데이트를 처리할 수 있음
// ** 필요 할때만 사용,  값은 캐싱하기 때문에 메모리가 소모된다. 성능에 무리가 갈 수 있다.
// 사용용도 : 불필요한 연산을 캐싱하고 싶을때, 참조값 비교로 인해 불필요한 랜더링 방지

import { useMemo, useState } from "react";

export default function MemoTest01() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Memo 컴포넌트 랜더링");

  // useMemo가 없으면 텍스트를 입력할때 마다 계산을 햬야 한다.
  // 그러나, input 에서 글자를 입력하면  count가 계산하지 않고 기존의 가지고 있는 값을 사용하게 해주는 것이 useMemo
  const expensiveValue = useMemo(() => {
    console.log("useMemo 처리");
    return count + 100;
  }, [count]);
  return (
    <div>
      {/* 
            <h3>useMemo Exam</h3>
            <p>연산값 : {count} </p>
            <button onClick={()=>setCount(count + 1)}>클릭</button>
            <input type="text" 
                value={text}
                onChange={(e)=> setText(e.target.value)}
            /> 
            */}

      <h3>useMemo Exam</h3>
      <p>연산값 : {expensiveValue} </p>
      <p>Text : {text}</p>
      {/*  prev 는 이전 상태 값 을 의미한다.*/}
      <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
