import "./listItem.scss";
import { Link } from "react-router-dom";

export default function ListItem({ thumb, name, type, id }) {
  return (
    <div className="listItem">
      <Link to={`/${type === "movie" ? "movie" : "series"}/${id}`}>
        <img src={thumb} alt={name} />
        <span>{name?.length > 35 ? name.slice(0, 35) + "..." : name}</span>
      </Link>
    </div>
  );
}
