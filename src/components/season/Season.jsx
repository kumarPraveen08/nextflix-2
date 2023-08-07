import "./season.scss";
import Episodes from "components/episodes/Episodes";
import { useState } from "react";

export default function Season({ name, seasons, seriesId }) {
  const [assignedSeason, setAssignedSeason] = useState(
    seasons[0]?.season_number
  );
  return (
    <div className="season">
      <h2>
        Episodes | <div className="seriesName">{name}</div>
      </h2>
      <select onChange={(e) => setAssignedSeason(e.target.value)}>
        {seasons?.map((season) => (
          <option value={season?.season_number} key={season?.id}>
            {season.name}
          </option>
        ))}
      </select>
      <Episodes
        season={assignedSeason}
        seriesId={seriesId}
        year={seasons[assignedSeason]?.air_date?.split("-")[0]}
        desc={seasons[assignedSeason]?.overview}
      />
    </div>
  );
}
