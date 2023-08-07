import { useNavigate } from "react-router-dom";
import "./upcoming.scss";

export default function Upcoming({ data, title, type }) {
  const navigate = useNavigate();
  const handleClick = (loc) => {
    navigate(loc);
    window.location.reload();
  };
  return (
    <div className="upcoming">
      <h2>{title}</h2>
      <div className="upcomingMovies">
        {data?.slice(0, 7).map((item) => (
          <div className="coming" key={item?.id}>
            <span
              onClick={() =>
                handleClick(
                  `/${type === "movie" ? "movie" : "series"}/${item.id}`
                )
              }
            >
              {type === "movie" ? item?.title : item?.name}
            </span>
            <p>{item?.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
