import { useState } from "react";

export default function EffectTest01() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>총 {count}번 출력했습니다.</p>
      <button onClick={() => setCount(count + 1)}>눌러주세요</button>
    </div>
  );
}
