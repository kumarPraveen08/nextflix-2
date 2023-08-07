import { fetchGenreMovies, fetchGenreSeries } from "api/Api";
import List from "components/list/List";
import { useEffect, useState } from "react";

export default function ListMaster({ genreId, name, type }) {
  const [loading, setLoading] = useState(false);
  const [genreSeries, setGenreSeries] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    type === "movie" ? getGenreMovies(genreId) : getGenreSeries(genreId);
    setLoading(false);
  }, [genreId]);

  const getGenreSeries = async (genreId) => {
    const data = await fetchGenreSeries(genreId);
    setGenreSeries(data.results);
  };
  const getGenreMovies = async (genreId) => {
    const data = await fetchGenreMovies(genreId);
    setGenreMovies(data.results);
  };
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <List
          title={`${name} ${type === "movie" ? "Movies" : "Series"}`}
          data={type === "movie" ? genreMovies : genreSeries}
          type={type}
        />
      )}
    </>
  );
}
