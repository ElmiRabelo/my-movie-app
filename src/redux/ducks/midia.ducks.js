export const Types = {
  GET_REQUEST: "midia/GET_REQUEST",
  GET_SUCCESS: "midia/GET_SUCCESS",
  GET_ERROR: "midia/GET_ERROR"
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
      return { ...state, loading: false, data: action.payload };
    case Types.GET_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  getError: () => ({ type: Types.GET_ERROR })
};
