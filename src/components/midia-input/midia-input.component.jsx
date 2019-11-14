import React from "react";
import PropTypes from "prop-types";

import { Input } from "./midia-input.styles";

const MidiaInput = ({ placeholder }) => {
  return <Input placeholder={placeholder} />;
};

MidiaInput.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default MidiaInput;
