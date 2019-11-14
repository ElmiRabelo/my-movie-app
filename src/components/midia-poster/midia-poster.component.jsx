import React from "react";
import PropTypes from "prop-types";
import { baseImgUrl, getImage } from "../../utils/imageBase";

import { Container } from "./midia-poster.styles";

//reponsavel por rederizar o poster e o titulo do filme/serie
const MidiaPoster = ({ posterUrl, size, title }) => {
  const fullPath = getImage(baseImgUrl, size, posterUrl);
  return (
    <Container>
      <img src={`${fullPath}`} alt={`${title} poster do filme`} />
      <div>
        <p>{title}</p>
      </div>
    </Container>
  );
};

MidiaPoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MidiaPoster;
