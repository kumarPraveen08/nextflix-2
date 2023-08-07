import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { fallbackSeriesBanner, imageOriginal } from "api/Api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Featured({ data, type, simple }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleClick = (loc) => {
    setLoading(true);
    navigate(loc);
    window.location.reload();
    setLoading(false);
  };

  return loading ? (
    "Loading..."
  ) : (
    <div className="featured">
      <img
        src={imageOriginal(data?.backdrop_path) || fallbackSeriesBanner}
        alt="banner"
      />
      <div className="layer"></div>
      <div className="info">
        <img
          src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTrzfcAPMhDZlMYwasnCeBt8PEgNhfPNGS_jkKniFG1q0rnrETyO_qSMZeiAs4Q28CHBMuvnz7QfunxSx0URuLTv3e26Dg3r2PWBocbuitPEpRkJe2a9nJhp_VgkQyO0-LFNQUHqMzzodLxNbrdHyAf9KLcXTrX7i2wQ5dueudxd-cpdd9jB1w.png?r=228"
          alt=""
        />
        <h2>{type === "movie" ? data?.title : data?.name}</h2>
        {!simple && (
          <span className="meta">
            {type === "movie"
              ? data?.release_date?.split("-")[0]
              : data?.first_air_date?.split("-")[0]}
            {" | "}
            {type === "movie" ? data?.runtime + "m" : "season 1"} |{" "}
            {data?.genres?.map((genre, index) => (
              <span key={index}>
                {genre.name}
                {index !== data?.genres.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        )}
        <p>{data?.overview}</p>
        <span>Starring: Jenna Ortega,Gwendoline Christie,Riki Lindhome</span>
        <span>Creators: Alfred Gough,Miles Millar</span>
        <div className="buttons">
          <button type="button" onClick={() => console.log(`play trailer`)}>
            <PlayArrowIcon /> Play
          </button>
          <button
            type="button"
            onClick={() =>
              handleClick(
                `/${type === "movie" ? "movie" : "series"}/${data.id}`
              )
            }
          >
            <InfoOutlinedIcon /> Info
          </button>
        </div>
      </div>
    </div>
  );
}
