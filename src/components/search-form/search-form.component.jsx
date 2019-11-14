import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MidiaActions } from "../../redux/ducks/midia.ducks";
import { Creators as ErrorActions } from "../../redux/ducks/error.ducks";

import FeedbackBox from "../feedback-box/feedback-box.component";

import colors from "../../styles/colors";
import { Container, Title } from "./search-form.styles";

//reponsavel por renderizar um form com Input que recebe o nome da serie/filme, um titulo e uma imagem de fundo. Tamanho do form e do input são definidos através de props
const SearchForm = ({
  title,
  formHeight,
  height,
  getRequest,
  setError,
  searchFor
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return setError("É necessário digitar algo primeiro.");
    getRequest({ inputValue, searchFor });
    setInputValue("");
  };

  return (
    <Container formHeight={formHeight} height={height}>
      <Title>{title}</Title>

      <form onSubmit={handleSubmit}>
        <FeedbackBox color={colors.error} />
        <input
          placeholder="Busque por um filme"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </Container>
  );
};

SearchForm.propTypes = {
  title: PropTypes.string.isRequired,
  formHeight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  getRequest: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  searchFor: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MidiaActions, ...ErrorActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
