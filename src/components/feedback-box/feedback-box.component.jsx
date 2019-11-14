import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../redux/ducks/error.ducks";

import { Container } from "./feedback-box.styles";

const FeedbackBox = ({ error: { visible, message }, color, hideError }) =>
  visible && (
    <Container color={color}>
      <p>{message}</p>
      <button onClick={hideError}>X</button>
    </Container>
  );

const mapStateToProps = state => ({
  error: state.error
});

FeedbackBox.propTypes = {
  color: PropTypes.string.isRequired,
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string
  }).isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackBox);
