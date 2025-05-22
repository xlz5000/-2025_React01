import { useState } from "react";
import TempInput from "./TempInput";
import TempRadio from "./TempRadio";

export default function TempEx() {
  const [unit, setUnit] = useState("Celsius");
  const [temperature, setTemperature] = useState("");
  const convertedTemp =
    unit === "Celsius"
      ? ((temperature * 9) / 5 + 32).toFixed(1)
      : (((temperature - 32) * 5) / 9).toFixed(1);
  return (
    <div>
      <h2>화씨 / 섭씨 변환기 </h2>
      <p>
        {" "}
        Converted : {temperature ? convertedTemp : "--"}
        {unit === "Fahrenheit" ? " C" : " F"}
      </p>
      {/* state들의 값을 변경하는 요소들이 모두 자식 컴포넌트에 있다. */}
      <TempInput value={temperature} unit={unit} onChang={setTemperature} />
      <TempRadio unit={unit} onUnitChange={setUnit} />
    </div>
  );
}
