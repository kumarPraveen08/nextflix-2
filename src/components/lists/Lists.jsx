import "./lists.scss";
import List from "components/list/List";
import { useEffect, useState } from "react";
import {
  fetchTrendingMovies,
  fetchTrendingSeries,
  fetchUpcomingMovies,
  fetchUpcomingSeries,
} from "api/Api";
import ListMaster from "./ListMaster";

export default function Lists({ genres, type }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [upcomingSeries, setUpcomingSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (type === "movie") {
      getTrendingMovies();
      getUpcomingMovies();
    } else {
      getTrendingSeries();
      getUpcomingSeries();
    }
    setLoading(false);
  }, [type]);
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    setTrendingMovies(data.results);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    setUpcomingMovies(data.results);
  };

  const getTrendingSeries = async () => {
    const data = await fetchTrendingSeries();
    setTrendingSeries(data.results);
  };
  const getUpcomingSeries = async () => {
    const data = await fetchUpcomingSeries();
    setUpcomingSeries(data.results);
  };
  return (
    <div className="lists">
      {loading ? (
        "Loading..."
      ) : (
        <List
          title={`Trending ${type === "movie" ? "Movies" : "Series"}`}
          data={type === "movie" ? trendingMovies : trendingSeries}
          type={type}
        />
      )}

      {loading ? (
        "Loading..."
      ) : (
        <List
          title={`Upcoming ${type === "movie" ? "Movies" : "Series"}`}
          data={type === "movie" ? upcomingMovies : upcomingSeries}
          type={type}
        />
      )}
      {genres?.map((genre) => (
        <ListMaster
          genreId={genre.id}
          name={genre.name}
          key={genre.id}
          type={type}
        />
      ))}
    </div>
  );
}
