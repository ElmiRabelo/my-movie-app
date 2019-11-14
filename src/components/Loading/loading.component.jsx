import React from "react";
import PropTypes from "prop-types";

import { Spinner, Container } from "./loading.styles";
import LoadingIcon from "../../assets/icons/spinner.svg";

const Loading = ({ width }) => (
  <Container>
    <Spinner src={LoadingIcon} alt="Carregando" width={width} />
  </Container>
);

Loading.propTypes = {
  width: PropTypes.string.isRequired
};

export default Loading;
