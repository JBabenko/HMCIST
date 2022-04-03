import { combineReducers } from 'redux';
import { authReducer } from '~/store/auth/auth.slice';

export const rootReducer = combineReducers({
  auth: authReducer,
});
