import { fallbackSeriesBanner, image500 } from "api/Api";
import "./related.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Related({ data, title, type }) {
  const navigate = useNavigate();
  const handleClick = (loc) => {
    navigate(loc);
    window.location.reload();
  };
  return (
    <div className="related">
      <h2>{title}</h2>
      <div className="relatedMovies">
        {data?.map((item) => (
          <Link to={`/${type === "movie" ? "movie" : "series"}/${item.id}`}>
            <img
              src={image500(item?.backdrop_path) || fallbackSeriesBanner}
              alt={item.id}
              key={item.id}
              onClick={() =>
                handleClick(
                  `/${type === "movie" ? "movie" : "series"}/${item.id}`
                )
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
