import React from "react";

import MoviesOverview from "../../components/movies-overview/movies-overview.component";
import SearchForm from "../../components/search-form/search-form.component";

import { Container } from "./Search.styles";

const SearchPage = () => {
  return (
    <Container>
      <SearchForm
        title="Navegue por uma infinidade de filmes."
        formHeight="50px"
        height="400px"
      />
      <MoviesOverview />
    </Container>
  );
};

export default SearchPage;
