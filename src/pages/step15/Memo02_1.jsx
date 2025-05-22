import { useMemo, useState } from "react";

export default function Memo02_1() {
  console.log("Memo02_1 컴포넌트");
  const [query, setQuery] = useState("");
  const items = ["apple", "banana", "cherry", "grape"];

  // includes()는 특정값을 포함하고 있으면 true 반환환
  const filterItem = useMemo(() => {
    console.log("Memo02_1 memo");
    return items.filter((k) => k.toLowerCase().includes(query.toLowerCase()));
  }, [query]);
  return (
    <div>
      <h3>Memo 사용 예제</h3>
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
