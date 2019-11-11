import React, { Fragment } from "react";

import MovieCard from "./components/movie-card/movie-card.component";
import MoviesOverview from "./components/movies-overview/movies-overview.component";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MoviesOverview />
    </Fragment>
  );
}

export default App;
