import { combineReducers } from 'redux';

import authReducer from './user';
import posts from './post';
import comment from './comment';
import post_categories from "./post_category";
import user from './profile';
import news from './news';
import news_categories from './news_category';
import lessons from './lesson';
import lesson_categories from './lesson_category';

export const reducers = combineReducers({
    authReducer,
    posts,
    comment,
    post_categories,
    user,
    news,
    news_categories,
    lessons,
    lesson_categories
});