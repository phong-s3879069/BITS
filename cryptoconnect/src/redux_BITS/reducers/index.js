import { combineReducers } from 'redux';

import authReducer from './user';

export const reducers = combineReducers({ authReducer});