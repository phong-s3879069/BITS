import { async } from "regenerator-runtime";
import * as api from "../api/profile";

import { FETCH_PERSONAL_INFO, 
    UPDATE_AVATAR, 
    UPDATE_PROFILE, 
    USER_FOLLOW, 
    USER_UNFOLLOW } from "../constants/actionTypes";


export const getPersonalInfo = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPersonalInfo(id);

        dispatch ({type: FETCH_PERSONAL_INFO, payload: data});
    } catch (error) {
        console.log(error.message)
    }
} 

export const updateAva = (user_id, avatar) => async (dispatch) => {
    try {
        const {data} = await api.updateAvatar(user_id, avatar);

        dispatch({ type: UPDATE_AVATAR, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (updateProfile) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(updateProfile);

        console.log("success")

        dispatch({ type: UPDATE_PROFILE, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const userFollow = (user_id, my_id) => async (dispatch) => {
    try {
        const { data } = await api.userFollow(user_id, my_id);

        console.log("success")

        dispatch({type: USER_FOLLOW, payload: data});

    } catch (error) {
        console.log(error.message);
    }
}

export const userUnfollow = (user_id, my_id) => async (dispatch) => {
    try {
        const { data } = await api.userUnfollow(user_id, my_id);

        console.log("success")

        dispatch({type: USER_UNFOLLOW, payload: data});

    } catch (error) {
        console.log(error.message);
    }
}

