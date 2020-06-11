import { LOAD_MOVIES_DATA } from "./actionType";
import { getMoviesData } from "../../api/moviesApi";

const loadMoviesData = (payload) => {
  return { type: LOAD_MOVIES_DATA, payload };
};

export const loadMovies = () => {
  return (dispatch) => {
    return getMoviesData()
      .then((data) => {
        if (
          data &&
          data.movieData &&
          data.recommendedIds &&
          data.trendingSearches
        ) {
          dispatch(loadMoviesData(data));
        } else {
          throw new Error("Response recieved has missing data");
        }
      })

      .catch((err) => {
        throw err;
      });
  };
};
