import React from "react";

import { Spinner, Container } from "./loading.styles";
import LoadingIcon from "../../assets/icons/spinner.svg";

const Loading = ({ width }) => (
  <Container>
    <Spinner src={LoadingIcon} alt="Carregando" width={width} />
  </Container>
);

export default Loading;
