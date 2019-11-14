import React from "react";
import PropTypes from "prop-types";

import StarIcon from "../../assets/icons/star.svg";
import ButtonBar from "../button-bar/button-bar.component";

import {
  Container,
  Topbar,
  Overview,
  StarContainer,
  Bottombar
} from "./midia-information.styles";

//responsavel por mostrar informações básicas como overview, nota, ano de lançamento.
const MidiaInformation = ({ overview, vote_average, year }) => (
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

MidiaInformation.propTypes = {
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired
};

export default MidiaInformation;
