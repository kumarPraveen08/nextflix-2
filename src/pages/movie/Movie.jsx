import "./movie.scss";
import Featured from "components/featured/Featured";
import Upcoming from "components/upcoming/Upcoming";
import Related from "components/related/Related";
import Details from "components/details/Details";
import { useEffect, useState } from "react";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  fetchUpcomingMovies,
} from "api/Api";
import { useParams } from "react-router-dom";

export default function Movie() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const movieId = id;
    setLoading(true);
    getMovieDetails(movieId);
    getMovieCredits(movieId);
    getRelatedMovies(movieId);
    getUpcomingMovies();
    setLoading(false);
  }, [id]);

  const getMovieDetails = async (movieId) => {
    const data = await fetchMovieDetails(movieId);
    setMovieDetails(data);
  };

  const getRelatedMovies = async (movieId) => {
    const data = await fetchSimilarMovies(movieId);
    setRelatedMovies(data.results);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    setUpcomingMovies(data.results);
  };

  const getMovieCredits = async (movieId) => {
    const data = await fetchMovieCredits(movieId);
    setMovieCredits(data);
  };
  return (
    <div className="movie">
      <Featured data={movieDetails} type={"movie"} simple={false} />
      <div className="movieDetails">
        {movieDetails &&
          (loading ? (
            "Loading..."
          ) : (
            <Details
              data={movieCredits?.cast?.slice(0, 28)}
              title={"More Details"}
            />
          ))}
        {relatedMovies.length > 0 &&
          (loading ? (
            "Loading..."
          ) : (
            <Related
              data={relatedMovies}
              title={"More Like This"}
              type={"movie"}
            />
          ))}
        {upcomingMovies?.length > 0 &&
          (loading ? (
            "Loading..."
          ) : (
            <Upcoming
              data={upcomingMovies}
              title={"Coming Soon"}
              type={"movie"}
            />
          ))}
      </div>
    </div>
  );
}
