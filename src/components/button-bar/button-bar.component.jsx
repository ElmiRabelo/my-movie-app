import React from "react";

import plusButton from "../../assets/icons/plus.svg";

import { Container } from "./button-bar.styles";

const ButtonBar = props => (
  <Container>
    <em>Ver mais</em>
    <img src={plusButton} alt="Detalhes" />
  </Container>
);

export default ButtonBar;
