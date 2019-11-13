import React from "react";

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackBox);
