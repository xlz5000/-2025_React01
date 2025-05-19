import { useState } from "react";

function createInitTodos() {
  const initTodos = [];
  for (let i = 0; i < 12; i++) {
    // initTodos = initTodos + i ;  // initTodos = 0 이면 상수라서 변경불가
    initTodos.push({ id: i, text: "Item " + (i + 1) }); // 오류가 안남남
  }
  return initTodos;
}

export default function CountEx4() {
  const [todos, setTodos] = useState(createInitTodos);
  const [text, setText] = useState("");
  return (
    <div>
      <hr />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          // 복사 후 뒤에 넣기기
          setTodos([
            ...todos,
            {
              id: todos.length,
              text: text,
            },
          ]);
          // 앞에 넣고 복사
          // setTodos([{
          //     id: todos.length,
          //     text : text
          // }, ...todos])
        }}
      >
        add
      </button>
      <ul>
        {todos.map((k) => (
          <li key={k.id}>{k.text}</li>
        ))}
      </ul>
    </div>
  );
}
