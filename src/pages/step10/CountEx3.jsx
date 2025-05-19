import { useState } from "react";

export default function CountEx3() {
  const [form, setForm] = useState({
    firstName: "둘리",
    lastName: "홍",
    email: "hong@naver.com",
  });
  return (
    <div>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              // 전개 연산자 : 자바스크립트에서 객체를 복사하거나 병합하때 사용
              // (특히 useState로 상태를 업데이트할때 자주사용)
              // 리엑트는 상태를 직접 수정할 수 없으므로, 기존 객체를 불변성을 지켜서 복사하고,
              // 필요한 값만 바꾸기 위해 사용하는 방식
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </div>
  );
}
