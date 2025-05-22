import { useRef } from "react";

export default function RefEx02() {
  // 1. useRef 객체 생성
  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current.value !== "") {
      console.log(inputRef.current.value);
    }
  };
  return (
    <div>
      <h3>useRef : DOM에 접근(포커스)</h3>
      {/* 2. 렌더링이 끝난 후 ref를 input 태그와 연결결 */}
      <input ref={inputRef} type="text" placeholder="입력하세요" />
      <button onClick={focusInput}> 값 확인</button>
    </div>
  );
}
