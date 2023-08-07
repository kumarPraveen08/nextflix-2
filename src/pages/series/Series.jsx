import "./series.scss";
import Featured from "components/featured/Featured";
import Lists from "components/lists/Lists";
import { seriesGenre } from "_data";
import { useEffect, useState } from "react";
import { fetchTrendingSeries } from "api/Api";

export default function Series() {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTrendingSeries();
    setLoading(false);
  }, []);
  const getTrendingSeries = async () => {
    const data = await fetchTrendingSeries();
    setTrendingSeries(data.results);
  };
  const displaySeries =
    trendingSeries[Math.floor(Math.random() * trendingSeries?.length)];
  return (
    <div className="series">
      {loading ? (
        "Loading"
      ) : (
        <Featured data={displaySeries} type={`series`} simple={true} />
      )}
      <Lists genres={seriesGenre} type={"series"} />
    </div>
  );
}
