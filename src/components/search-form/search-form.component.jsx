import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";

import { Container, Title } from "./search-form.styles";

const SearchForm = ({ title, formHeight, height, getRequest }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;
    const typeSearch = "tv";
    getRequest({ inputValue, typeSearch });
    setInputValue("");
  };

  return (
    <Container formHeight={formHeight} height={height}>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Busque por um filme"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
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
