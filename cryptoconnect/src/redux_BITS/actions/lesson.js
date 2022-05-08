import * as api from '../api/lesson'

import { CREATE_LESSON, 
    UPDATE_LESSON, 
    DELETE_LESSON, 
    FETCH_LESSON_DETAIL,
    FETCH_LESSON_DETAIL_INCLUDING_CATEGORY, 
    FETCH_LESSON_BY_TOPIC, 
    FETCH_ALL_LESSON_CATEGORY  } from '../constants/actionTypes';

export const addLesson = (newLesson) => async (dispatch) => {
    try {
        console.log(newLesson.user_id)
        const { data } = await api.addLesson(newLesson);

        console.log("success")

        dispatch({ type: CREATE_LESSON, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const updateLesson = (updateLesson) => async (dispatch) => {
    try {
        const { data } = await api.updateLesson(updateLesson);

        console.log("success")

        dispatch({ type: UPDATE_LESSON, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const deleteLesson = (deleteLesson) => async (dispatch) => {
    try {
        await api.deleteLesson(deleteLesson);

        console.log("success")

        dispatch({ type: DELETE_LESSON, payload: deleteLesson });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getLessonDetail = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchLessonDetail(id);

        dispatch ({type: FETCH_LESSON_DETAIL, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const getLessonDetailIncludingCategory = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchLessonDetailIncludingCategory(id);

        dispatch ({type: FETCH_LESSON_DETAIL_INCLUDING_CATEGORY, payload: data});

        if (!data) {
            window.location.replace("/*")
        } 
    } catch (error) {
        console.log(error.message)
    }
}

export const getLessonsFromTopic = (id) => async (dispatch) => {
    try {

        const { data } = await api.fetchLessonsForTopic(id);

        dispatch({ type: FETCH_LESSON_BY_TOPIC, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const getLessonCategory = () => async (dispatch) => {
    try {

        const { data } = await api.fetchAllLessonCategories();

        dispatch({ type: FETCH_ALL_LESSON_CATEGORY, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}