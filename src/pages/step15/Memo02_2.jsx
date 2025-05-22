import { useState } from "react";

export default function Memo02_2() {
  console.log("Memo02_2 컴포넌트");
  const [query, setQuery] = useState("");
  const items = ["apple", "banana", "cherry", "grape"];

  const filterItem = items.filter((k) => {
    console.log("필터");
    return k.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div>
      <h3>Memo 사용 X 예제</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filterItem.map((k, i) => {
          return <li key={i}>{k}</li>;
        })}
      </ul>
    </div>
  );
}
