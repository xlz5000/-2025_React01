import { useParams } from "react-router-dom";

export default function Fourth(props) {
  const { idx, name } = useParams();
  return (
    <div>
      <h3>영화 상세 페이지 </h3>
      <div>
        {" "}
        {idx} : {name}{" "}
      </div>
      <img src={`/imgs/${props.data[idx].img}`} alt={name} />
    </div>
  );
}
