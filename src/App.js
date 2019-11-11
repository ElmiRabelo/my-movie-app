import React, { Fragment } from "react";

import SearchPage from "./pages/Search/Search.page";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <SearchPage />
    </Fragment>
  );
}

export default App;
