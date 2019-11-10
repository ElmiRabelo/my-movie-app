import React, { Component } from "react";

import MoviePoster from "../movie-poster/movie-poster.component";
import MovieInformation from "../movie-information/movie-information.component";

import { posterSizes } from "../../utils/imageBase";

import { Container } from "./movie-card.styles";

const MovieCard = props => {
  const desc =
    "Harry Potter (Daniel Radcliffe) é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley.";
  return (
    <Container>
      <MoviePoster
        posterUrl="\/qnw9610ojLT0jU3lMSZOAFttt1e.jpg"
        size={posterSizes.small}
        title="Harry Potter e a Pedra Filosofal"
      />
      <MovieInformation description={desc} vote_average={7.5} />
    </Container>
  );
};

export default MovieCard;
