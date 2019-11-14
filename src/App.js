import React, { Fragment } from "react";

import SearchMovie from "./pages/Search/SearchMovie.page";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <SearchMovie />
    </Fragment>
  );
}

export default App;
