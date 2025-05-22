import { useRef, useState } from "react";

export default function RefEx03() {
  console.log("Ref 렌더링");
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("count : " + count + ", countRef : " + countRef.current);

  const statePlus = () => {
    setCount(count + 1);
  };

  const RefPlus = () => {
    countRef.current = countRef.current + 1;
    console.log("count-안 : " + count + ", countRef-안 : " + countRef.current);
  };
  return (
    <div>
      <p>State : {count} </p>
      <p>Ref : {countRef.current} </p>
      <button onClick={statePlus}>State 올려</button>
      <button onClick={RefPlus}>Ref 올려</button>
    </div>
  );
}
