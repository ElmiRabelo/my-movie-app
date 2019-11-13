import React from "react";

import { Container } from "./feedback-box.styles";

const FeedbackBox = ({ color, message }) => (
  <Container color={color}>
    <p>{message}</p>
  </Container>
);

export default FeedbackBox;
