import React from "react";

import StarIcon from "../../assets/icons/star.svg";
import ButtonBar from "../button-bar/button-bar.component";

import {
  Container,
  Topbar,
  Overview,
  StarContainer,
  Bottombar
} from "./movie-information.styles";

//responsavel por mostrar informações básicas como overview, nota, ano de lançamento.
const MovieInformation = ({ overview, vote_average, year }) => (
  <Container>
    <Topbar>
      <StarContainer>
        <img src={StarIcon} alt="Star Icon" />
        <strong>{vote_average}</strong>
      </StarContainer>
      <strong>{year}</strong>
    </Topbar>
    <Overview>{overview}</Overview>
    <Bottombar>
      <ButtonBar />
    </Bottombar>
  </Container>
);

export default MovieInformation;
