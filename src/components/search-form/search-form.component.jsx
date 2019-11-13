import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";
import { Creators as ErrorActions } from "../../redux/ducks/error.ducks";

import FeedbackBox from "../feedback-box/feedback-box.component";

import colors from "../../styles/colors";
import { Container, Title } from "./search-form.styles";

const SearchForm = ({
  title,
  formHeight,
  height,
  getRequest,
  setError,
  error
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return setError("É necessário digitar algo primeiro.");
    const typeSearch = "tv";
    getRequest({ inputValue, typeSearch });
    setInputValue("");
  };

  return (
    <Container formHeight={formHeight} height={height}>
      <Title>{title}</Title>

      <form onSubmit={handleSubmit}>
        {error.visible && <FeedbackBox color={colors.error} />}
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
  movies: state.movies,
  error: state.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MoviesActions, ...ErrorActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
