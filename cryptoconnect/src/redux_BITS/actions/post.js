import * as api from '../api/post'

import { CREATE_POST, 
    UPDATE_POST, 
    DELETE_POST, 
    FETCH_POST_DETAIL, 
    FETCH_COMMENT_FOR_POST, 
    ADD_COMMENT, 
    UPDATE_COMMENT,
    DELETE_COMMENT,
    FETCH_BY_TOPIC, 
    LIKE, 
    DISLIKE, 
    FETCH_ALL_CATEGORY  } from '../constants/actionTypes';


//Action Creators
export const addPost = (newPost) => async (dispatch) => {
    try {
        console.log(newPost.user_id)
        const { data } = await api.addPost(newPost);

        console.log("success")

        dispatch({ type: CREATE_POST, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (updatePost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(updatePost);

        console.log("success")

        dispatch({ type: UPDATE_POST, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (deletePost) => async (dispatch) => {
    try {
        await api.deletePost(deletePost);

        console.log("success")

        dispatch({ type: DELETE_POST, payload: deletePost });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getPostDetail = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPostDetail(id);

        dispatch ({type: FETCH_POST_DETAIL, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const getCommentForPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchCommentForPost(id);

        dispatch ({type: FETCH_COMMENT_FOR_POST, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const addComment = (post) => async (dispatch) => {
    try {
        const {data} = await api.addComment(post);

        dispatch({ type: ADD_COMMENT, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const updateComment = (post) => async (dispatch) => {
    try {
        const {data} = await api.updateComment(post);

        dispatch({ type: UPDATE_COMMENT, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const deleteComment = (id) => async (dispatch) => {
    try {
        await api.deleteComment(id);

        dispatch({ type: DELETE_COMMENT, payload: id });
    } catch (error) {
        console.log(error)
    }
}

export const getPostFromTopic = (id) => async (dispatch) => {
    try {

        const { data } = await api.fetchPostsForTopic(id);

        dispatch({ type: FETCH_BY_TOPIC, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const like = (post_id, user_id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(post_id, user_id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const dislike = (post_id, user_id) => async (dispatch) => {
    try {
        const { data } = await api.dislikePost(post_id, user_id);

        dispatch({ type: DISLIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const getPostCategory = () => async (dispatch) => {
    try {

        const { data } = await api.fetchAllCategories();

        dispatch({ type: FETCH_ALL_CATEGORY, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}