import React from "react";

import MovieInput from "../movie-input/movie-input.component";

import { Container, Title } from "./search-form.styles";

const SearchForm = ({ title, formHeight, height }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container formHeight={formHeight} height={height}>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <MovieInput placeholder="Busque por um filme" />
      </form>
    </Container>
  );
};

export default SearchForm;
