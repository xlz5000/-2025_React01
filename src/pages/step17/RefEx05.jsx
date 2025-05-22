import { useEffect, useRef } from "react";

export default function RefEx05() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCheckName = () => {
    const inputValue = inputRef.current.value;
    alert(` ${inputValue}님 환영합니다.`);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCheckName();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="userName"
        ref={inputRef}
        onKeyDown={handleKeyDown} // 키이벤트
      />
      <button onClick={handleCheckName}>이름확인</button>
    </div>
  );
}
