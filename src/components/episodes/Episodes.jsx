import Episode from "components/episode/Episode";
import "./episodes.scss";
import { fetchSeriesSeasonDetails } from "api/Api";
import { useEffect, useState } from "react";

export default function Episodes({ season, seriesId, year, desc }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getSeasionDetails(seriesId, season);
  }, [seriesId, season]);

  const getSeasionDetails = async (seriesId, season_number) => {
    const data = await fetchSeriesSeasonDetails(seriesId, season_number);
    setEpisodes(data.episodes);
  };
  return (
    <div className="episodes">
      <span>
        <b>Release year: {year}</b>
      </span>
      <p>{desc}</p>
      <div className="episodeContainer">
        {episodes?.map((episode, index) => (
          <Episode episode={episode} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
