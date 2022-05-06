import { combineReducers } from 'redux';

import authReducer from './user';
import posts from './post';
import comment from './comment';
import post_categories from "./post_category";

export const reducers = combineReducers({ authReducer, posts, comment, post_categories});