import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";

import MovieInput from "../movie-input/movie-input.component";

import { Container, Title } from "./search-form.styles";

const SearchForm = ({ title, formHeight, height, getRequest }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const movieName = inputValue.trim().replace(" ", "+");
    getRequest(movieName);
  };

  return (
    <Container formHeight={formHeight} height={height}>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <MovieInput
          placeholder="Busque por um filme"
          value={inputValue}
          onChange={() => setInputValue(inputValue)}
        />
      </form>
    </Container>
  );
};

const mapStateToProps = state => ({
  movieName: state.movies.movieName
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
