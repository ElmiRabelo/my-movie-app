import React, { Fragment } from "react";

import MovieCard from "./components/movie-card/movie-card.component";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MovieCard />
    </Fragment>
  );
}

export default App;
