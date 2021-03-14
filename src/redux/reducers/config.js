import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';

const appReducer = combineReducers({
  auth,
  user,
});

export default (state, action) => appReducer(state, action);
