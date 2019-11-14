import React from "react";
import PropTypes from "prop-types";

import MidiaPoster from "../midia-poster/midia-poster.component";
import MidiaInformation from "../midia-information/midia-information.component";

import { posterSizes } from "../../utils/imageBase";

import { Container } from "./midia-card.styles";

//Reponsavel por renderizar a composição de MidiaPoster e MidiaInformation e passar as props necessárias de cada um.
const MidiaCard = ({
  id,
  poster_path,
  overview,
  vote_average,
  title,
  release_date
}) => {
  return (
    <Container id={id}>
      <MidiaPoster
        posterUrl={poster_path}
        size={posterSizes.small}
        title={title}
      />
      <MidiaInformation
        overview={overview}
        vote_average={vote_average}
        year={release_date}
      />
    </Container>
  );
};

MidiaCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired
};

export default MidiaCard;
