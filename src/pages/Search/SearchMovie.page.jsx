import React from "react";

import MidiaOverview from "../../components/midia-overview/midia-overview.component";
import SearchForm from "../../components/search-form/search-form.component";

import { Container } from "./SearchMovie.styles";

const SearchMovie = () => {
  return (
    <Container>
      <SearchForm
        title="Navegue por uma infinidade de filmes."
        formHeight="50px"
        height="400px"
        searchFor="movie"
      />
      <MidiaOverview />
    </Container>
  );
};

export default SearchMovie;
