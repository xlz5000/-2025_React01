import { Button } from "@mui/material";
import { useState } from "react";

export default function CountEx2() {
  // 리엑트에서 화면이 변경(재 렌더링)하기 위해서는 상태값이 변경되었다고
  // 리엑트에게 알려줘야 한다. (상태관리 => useState)

  //    [변수이름, setter] = useState(초기값)
  const [count, setCount] = useState(5);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      <h2>Count : {count} </h2>
      <Button variant="outlined" onClick={increment}>
        {" "}
        +{" "}
      </Button>
      <Button variant="outlined" onClick={decrement}>
        {" "}
        -{" "}
      </Button>
    </>
  );
}
