import "./details.scss";

export default function Details({ data, title }) {
  return (
    <div className="details">
      <h2>{title}</h2>
      <span>Cast</span>
      <div className="castContainer">
        {data?.map((p) => (
          <div className="castName" key={[p.id]}>
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}
