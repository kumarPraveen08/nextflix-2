import "./movies.scss";
import Featured from "components/featured/Featured";
import Lists from "components/lists/Lists";
import { movieGenre } from "_data";
import { fetchTrendingMovies } from "api/Api";
import { useEffect, useState } from "react";

export default function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTrendingMovies();
    setLoading(false);
  }, []);
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    setTrendingMovies(data.results);
  };
  const displayMovie =
    trendingMovies[Math.floor(Math.random() * trendingMovies?.length)];
  return (
    <div className="movies">
      {loading ? (
        "Loading..."
      ) : (
        <Featured data={displayMovie} type={`movie`} simple={true} />
      )}
      <Lists genres={movieGenre} type={"movie"} />
    </div>
  );
}
