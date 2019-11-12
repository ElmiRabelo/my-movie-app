import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";

// import MovieInput from "../movie-input/movie-input.component";

import { Container, Title } from "./search-form.styles";

// class SearchForm extends React.Component {
//   state = {
//     searchvalue: ""
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { searchvalue } = this.state;
//     console.tron.log(searchvalue);
//     // getRequest(searchvalue);
//   };

//   render() {
//     const { title, formHeight, height, getRequest } = this.props;
//     return (
//       <Container formHeight={formHeight} height={height}>
//         <Title>{title}</Title>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             placeholder="Busque por um filme"
//             value={this.state.searchvalue}
//             onChange={e => this.setState({ searchvalue: e.target.value })}
//           />
//         </form>
//       </Container>
//     );
//   }
// }

const SearchForm = ({ title, formHeight, height, getRequest }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const movieName = inputValue.trim().replace(" ", "+");
    getRequest(movieName);
    setInputValue("");
  };

  return (
    <Container formHeight={formHeight} height={height}>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Busque por um filme"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </Container>
  );
};

const mapStateToProps = state => ({
  movieName: state.movies.movieName
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
