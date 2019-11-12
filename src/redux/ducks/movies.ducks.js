export const Types = {
  GET_REQUEST: "movies/GET_REQUEST",
  GET_SUCCESS: "movies/GET_SUCCESS",
  ENTER_MOVIE_NAME: "movies/ENTER_MOVIE_NAME"
};

const INITIAL_STATE = {
  data: [],
  movieName: "",
  loading: false,
  error: false,
  errorMsg: ""
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case Types.ENTER_MOVIE_NAME:
      return { ...state, movieName: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  enterMovieName: payload => ({ type: Types.GET_SUCCESS, payload })
};
