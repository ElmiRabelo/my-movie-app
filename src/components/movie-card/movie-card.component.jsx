import React, { Component } from "react";

import MoviePoster from "../movie-poster/movie-poster.component";
import MovieInformation from "../movie-information/movie-information.component";

import { posterSizes } from "../../utils/imageBase";

import { Container } from "./movie-card.styles";

const MovieCard = ({
  id,
  poster_path,
  overview,
  vote_average,
  title,
  release_date
}) => {
  return (
    <Container id={id}>
      <MoviePoster
        posterUrl={poster_path}
        size={posterSizes.small}
        title={title}
      />
      <MovieInformation
        overview={overview}
        vote_average={vote_average}
        year={release_date}
      />
    </Container>
  );
};

export default MovieCard;
