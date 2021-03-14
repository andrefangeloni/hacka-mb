import { AuthActions } from '../actions';

const initialState = {
  token: {},
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AuthActions.GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

export const getToken = (state) => state.auth.token;
