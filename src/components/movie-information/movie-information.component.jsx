import React from "react";

import { Container } from "./movie-information.styles";

const MovieInformation = ({ description, vote_average }) => (
  <Container>
    <div>
      <strong>Nota: </strong> <strong>{vote_average}</strong>
    </div>
    <p>{description}</p>
    <div>
      <strong>+</strong> <strong>-</strong>
    </div>
  </Container>
);

export default MovieInformation;
