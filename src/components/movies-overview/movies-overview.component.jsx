import React from "react";

import MovieCard from "../movie-card/movie-card.component";
import MovieInput from "../movie-input/movie-input.component";

import api from "../../services/api";

import { Container } from "./movies-overview.styles";

//Reponsavel por renderizar vários MovieCard provinientes do resultado de busca.
class MoviesOverview extends React.Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const response = await api
      .get(
        `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=Harry+Potter&language=pt-BR`
      )
      .then(resp => resp.data.results);
    this.setState({ movies: [...response] });
  }

  render() {
    const { movies } = this.state;
    return (
      <Container>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            overview={movie.overview}
            vote_average={movie.vote_average}
            title={movie.title}
            release_date={movie.release_date}
          />
        ))}
      </Container>
    );
  }
}

export default MoviesOverview;
