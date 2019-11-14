export const Types = {
  GET_REQUEST: "movies/GET_REQUEST",
  GET_SUCCESS: "movies/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function midia(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload })
};
