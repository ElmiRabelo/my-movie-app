import React from "react";
import { baseImgUrl } from "../../utils/imageBase";

import { Container } from "./movie-poster.styles";

const MoviePoster = ({ posterUrl, size, title }) => {
  const fullPath = `${baseImgUrl + size + posterUrl}`;
  console.log(fullPath);
  return (
    <Container>
      <img src={`${fullPath}`} alt={`${title} poster do filme`} />
      <div>
        <p>{title}</p>
      </div>
    </Container>
  );
};

export default MoviePoster;
