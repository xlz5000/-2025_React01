import { useState } from "react";

export default function FormEx() {
  const [userName, setUserName] = useState("");
  const [isSubScribed, setIsSubScribed] = useState(false);

  const roles = ["user", "admin", "guest"];
  const [role, setRole] = useState(roles[0]);
  return (
    <form>
      <p>
        name : {userName} {isSubScribed && "(subScribed)"}
      </p>
      <p>Role : {role}</p>
      <p>
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </p>
      <p>
        <input
          type="checkbox"
          checked={isSubScribed}
          onChange={(e) => setIsSubScribed(e.target.checked)}
        />
        <label>SubScribed</label>
      </p>
      <p>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          {roles.map((k) => {
            return (
              <option key={k} value={k}>
                {k}
              </option>
            );
          })}
        </select>
      </p>
    </form>
  );
}
