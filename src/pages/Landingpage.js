import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Appbar from "../components/appbar";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import { loadMovies } from "../redux/actions/moviesAction";
import { connect } from "react-redux";
import MovieGallery from "../components/gallery";
import TrendingList from "../components/trendinglist";

const LandingPage = ({
  loadMovies,
  movies,
  recommendedMovies,
  trendingSearchData,
  movieTitles,
  ...props
}) => {
  useEffect(() => {
    if (movies.length === 0) {
      loadMovies();
    }
  }, [loadMovies, movies.length]);

  return (
    movies.length > 0 && (
      <>
        <header>
          <Appbar items={movieTitles} />
          <Navbar />
          <Carousel />
        </header>
        <main className="main-container">
          <aside>
            <TrendingList data={trendingSearchData} />
          </aside>
          <section>
            <MovieGallery
              data={recommendedMovies}
              title={"Recommended Movies"}
            />
            <MovieGallery data={movies} title={"All Movies"} />
          </section>
        </main>
      </>
    )
  );
};

LandingPage.propTypes = {
  movies: PropTypes.array.isRequired,
  recommendedMovies: PropTypes.array.isRequired,
  trendingSearchData: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
  movieTitles: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movieData || [],
    recommendedMovies:
      state.recommendedIds &&
      state.recommendedIds.length > 0 &&
      state.movieData &&
      state.movieData.length > 0
        ? state.recommendedIds.map((id) => {
            return {
              ...state.movieData.find((movie) => movie.id === id),
            };
          })
        : [],
    trendingSearchData: state.trendingSearches || [],
    movieTitles:
      state.movieData && state.movieData.length > 0
        ? state.movieData.map((movie) => {
            return { label: movie.title };
          })
        : [],
  };
};

const mapDispatchToProps = {
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
