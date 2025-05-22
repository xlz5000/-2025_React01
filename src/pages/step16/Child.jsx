import React from "react";

function Child({ onClick }) {
  // 원래는 이벤트 핸들러 함수를 만들어서 사용해야 하지만
  // 지금은 부모한테  받아서 실행
  console.log("Child 컴포넌트 렌더링");
  return (
    <div>
      <button onClick={onClick}>자식 버튼 클릭</button>
    </div>
  );
}
// React.memo 는  React에서 컴포넌트의 불필요한 리 렌더링을 막아주는 최적화도구
// 자식 컴포넌트는 props가 변하지 않는데도 리 렌더링 되는 경우  React.memo 를 사용
export default React.memo(Child);
