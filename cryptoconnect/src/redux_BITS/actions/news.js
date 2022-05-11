import * as api from '../api/news'

import { CREATE_NEWS, 
    UPDATE_NEWS, 
    DELETE_NEWS, 
    FETCH_NEWS_DETAIL,
    FETCH_NEWS_DETAIL_INCLUDING_CATEGORY, 
    FETCH_NEWS_BY_TOPIC, 
    FETCH_ALL_NEWS_CATEGORY  } from '../constants/actionTypes';

export const addNews = (newNews) => async (dispatch) => {
    try {
        console.log(newNews.user_id)
        const { data } = await api.addNews(newNews);

        console.log("success")

        dispatch({ type: CREATE_NEWS, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const updateNews = (updateNews) => async (dispatch) => {
    try {
        const { data } = await api.updateNews(updateNews);

        console.log("success")

        dispatch({ type: UPDATE_NEWS, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const deleteNews = (deleteNews) => async (dispatch) => {
    try {
        await api.deleteNews(deleteNews);

        console.log("success")

        dispatch({ type: DELETE_NEWS, payload: deleteNews });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getNewsDetail = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchNewsDetail(id);

        dispatch ({type: FETCH_NEWS_DETAIL, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const getNewsDetailIncludingCategory = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchNewsDetailIncludingCategory(id);

        dispatch ({type: FETCH_NEWS_DETAIL_INCLUDING_CATEGORY, payload: data});

        if (!data) {
            window.location.replace("/*")
        } 
    } catch (error) {
        console.log(error.message)
    }
}

export const getNewsFromTopic = (id) => async (dispatch) => {
    try {

        const { data } = await api.fetchNewsForTopic(id);

        dispatch({ type: FETCH_NEWS_BY_TOPIC, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const getNewsCategory = () => async (dispatch) => {
    try {

        const { data } = await api.fetchAllNewsCategories();

        dispatch({ type: FETCH_ALL_NEWS_CATEGORY, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}