import { useEffect, useState } from "react";

// useEffect 는 리액트에서 제공하는 훅 중 하나로
// 함수형 컴포넌트에서 사이드 이펙트를 처리할 수 있도록 도와 준다.
// 사이드 이펙트란 컴포넌트의 렌더링 외의 작업(**서버에서 데이터가져오기, DOM 수정 등)을 의미한다.

// useeffect는 상태변경으로 인핸 발생한 레더링(useState)이후에 실행된다.
// 의존성 배열을 통해 특정 상태나 속성의 변화에만 반응하도록 제한 할 수 있다.
// 의존성 배열이 없으면 갱신할때 마다 호출
// 의존성 배열이 [](빈배열)이면 처음 한번하고 다시 호출 안함

// 형식)
// useEffect(()=>{
//    실행할 작업
//    return 화살표 함수 생략가능
//    [return ()=>{
//     }]
// },[의존성배열1, 의존성배열2....]);

export default function EffectTest02() {
  const [count, setCount] = useState(1);
  // 최초 한번만 실행 (빈배열 사용)
  // useEffect(()=>{
  //     document.title =`총 ${count}번 클릭했습니다.`;
  // },[]);

  // 매번 실행
  //  useEffect(()=>{
  //     document.title =`총 ${count}번 클릭했습니다.`;
  // },);

  // count가 변경되면 재렌더링 되면 useEffect 실행되게 하자
  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  }, [count]);

  return (
    <div>
      <p>총 {count}번 출력했습니다.</p>
      <button onClick={() => setCount(count + 1)}>눌러주세요</button>
    </div>
  );
}
