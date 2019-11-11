import React from "react";

import { Input } from "./movie-input.styles";

const MovieInput = props => {
  return <Input placeholder={props.placeholder} />;
};

export default MovieInput;
