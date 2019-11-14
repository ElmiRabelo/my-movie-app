import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import MidiaCard from "../midia-card/midia-card.component";
import Loading from "../Loading/loading.component";

import { Container } from "./midia-overview.styles";

//Reponsavel por renderizar vários MovieCard provinientes do resultado de busca.
const MidiaOverview = ({ midia }) => {
  let content;
  if (midia.data.length) {
    return (content = (
      <Container>
        {midia.data.map(midia => (
          <MidiaCard
            key={midia.id}
            id={midia.id}
            poster_path={midia.poster_path}
            overview={midia.overview}
            vote_average={midia.vote_average}
            title={midia.title}
            release_date={midia.release_date || midia.first_air_date}
          />
        ))}
      </Container>
    ));
  } else {
    content = <Container></Container>;
  }
  return (
    <Fragment>{midia.loading ? <Loading width="100px" /> : content}</Fragment>
  );
};

MidiaOverview.propTypes = {
  midia: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        title: PropTypes.string,
        release_date: PropTypes.string,
        first_air_date: PropTypes.string
      })
    ),
    loading: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({
  midia: state.midia
});

export default connect(mapStateToProps)(MidiaOverview);
