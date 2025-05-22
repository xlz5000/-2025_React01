import { useReducer, useState } from "react";

// 1. reducer  함수 정의
function reducer(state, action) {
  switch (action.type) {
    case "depo":
      return state + action.payload; // 현재상태(state) 에 payload 더하기

    case "isdepo":
      return state - action.payload; // 현재상태(state) 에 payload 빼기

    default:
      return state;
  }
}

export default function UseReducerEx2() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>ICT 은행에 오신 것을 환영합니다.</h2>
      <p> 잔고 : {money} </p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const value = parseInt(e.target.value) || 0;
          setNumber(value < 0 ? 0 : value); // 음수 방지
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "depo", payload: number });
          setNumber(0);
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          if (number > money) {
            alert("잔고부족");
          } else {
            dispatch({ type: "isdepo", payload: number });
            setNumber(0);
          }
        }}
      >
        출금
      </button>
    </div>
  );
}
