import "./singleSeries.scss";
import Featured from "components/featured/Featured";
import Upcoming from "components/upcoming/Upcoming";
import Related from "components/related/Related";
import Details from "components/details/Details";
import { useEffect, useState } from "react";
import {
  fetchSeriesCredits,
  fetchSeriesDetails,
  fetchSimilarSeries,
  fetchUpcomingSeries,
} from "api/Api";
import { useParams } from "react-router-dom";
import Season from "components/season/Season";

export default function SingleSeries() {
  const [seriesDetails, setSeriesDetails] = useState([]);
  const [seriesCredits, setSeriesCredits] = useState([]);
  const [relatedSeries, setRelatedSeries] = useState([]);
  const [upcomingSeries, setUpcomingSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const seriesId = id;
    setLoading(true);
    getSeriesDetails(seriesId);
    getSeriesCredits(seriesId);
    getRelatedSeries(seriesId);
    getUpcomingSeries();
    setLoading(false);
  }, [id]);

  const getSeriesDetails = async (seriesId) => {
    const data = await fetchSeriesDetails(seriesId);
    setSeriesDetails(data);
  };

  const getRelatedSeries = async (seriesId) => {
    const data = await fetchSimilarSeries(seriesId);
    setRelatedSeries(data.results);
  };

  const getUpcomingSeries = async () => {
    const data = await fetchUpcomingSeries();
    setUpcomingSeries(data.results);
  };

  const getSeriesCredits = async (seriesId) => {
    const data = await fetchSeriesCredits(seriesId);
    setSeriesCredits(data);
  };
  return (
    <div className="singleSeries">
      <Featured data={seriesDetails} type={"series"} simple={false} />
      <div className="seriesDetails">
        {seriesDetails?.seasons &&
          (loading ? (
            "Loading..."
          ) : (
            <Season
              name={seriesDetails?.name}
              seasons={seriesDetails?.seasons}
              seriesId={id}
            />
          ))}

        {seriesCredits &&
          (loading ? (
            "Loading..."
          ) : (
            <Details
              data={seriesCredits?.cast?.slice(0, 28)}
              title={"More Details"}
            />
          ))}
        {relatedSeries?.length > 0 &&
          (loading ? (
            "Loading..."
          ) : (
            <Related
              data={relatedSeries}
              title={"More Like This"}
              type={"series"}
            />
          ))}
        {upcomingSeries?.length > 0 &&
          (loading ? (
            "Loading..."
          ) : (
            <Upcoming
              data={upcomingSeries}
              title={"Coming Soon"}
              type={"series"}
            />
          ))}
      </div>
    </div>
  );
}
