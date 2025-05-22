export default function Movie(props) {
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <h3>{props.year}</h3>
        <img src={props.poster} alt={props.title} />
        <h3>
          {props.genres.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </h3>
      </div>
    </div>
  );
}
