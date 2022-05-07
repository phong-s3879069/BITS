import { FETCH_PERSONAL_INFO, UPDATE_AVATAR, UPDATE_PROFILE, USER_FOLLOW, USER_UNFOLLOW } from "../constants/actionTypes";

export default (user = [], action) => {
    switch (action.type) {
        case FETCH_PERSONAL_INFO:
            return action.payload;
        case UPDATE_AVATAR:
            return [...user, action.payload];
        case UPDATE_PROFILE:
            console.log("UPDATE_POST");
            return [...user, action.payload];
        case USER_FOLLOW:
            console.log("USER_FOLLOW");
            return [...user, action.payload];
        case USER_UNFOLLOW:
            console.log("USER_UNFOLLOW");
            return [...user, action.payload];
        default:
            console.log("Default");
            return user;
    }
}