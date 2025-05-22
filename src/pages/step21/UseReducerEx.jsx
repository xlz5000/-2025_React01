// useReducer : react에서 복잡한 상태관리를 더 체계적으로 예측 가능하게 처리하기 위한 상태관리 훅
//              useState의 대체재이며, 상태 변화의 로직이 복합할때 사용하면
//              더 명확하고 깔금하게 관리할 수 있다.

import { useReducer, useState } from "react";

// 형식)  const [state, dispatch] = useReducer(reducer, initialState);
//        state : 현재 상태 (useState 처럼 사용)
//     dispatch : 상태를 변경하는 요청(함수)
//      reducer : 상태(state)를 어떻게 변경할지 결정하는 함수
// initialState : 초기 상태값
//       action : 상태 변경을 요청하는 객체 ({type, payload})
//                type : 무엇을 할지(동작이름),  payload : 무엇을 가지고 할지(상태를 바꾸기위한 데이터)

// 1. reducer  함수 정의
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };

    case "sub":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

export default function UseReducerEx() {
  // const [state, setState] = useState(0)
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "add" })}> + </button>
      <button onClick={() => dispatch({ type: "sub" })}> - </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
    </div>
  );
}
