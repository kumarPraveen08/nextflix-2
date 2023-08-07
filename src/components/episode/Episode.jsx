import { fallbackSeriesBanner, image500 } from "api/Api";
import "./episode.scss";

export default function Episode({ episode, index }) {
  return (
    <div className="episode">
      <img
        src={image500(episode?.still_path) || fallbackSeriesBanner}
        alt={episode?.id}
      />
      <div className="meta">
        <span className="episodeTitle">
          {index + 1}. {episode?.name}
        </span>
        <span className="runtime">{episode?.runtime || 0}m</span>
      </div>
      <div className="desc">{episode?.overview}</div>
    </div>
  );
}
