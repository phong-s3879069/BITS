import {
    FETCH_LESSON_DETAIL_INCLUDING_CATEGORY
} from "../constants/actionTypes";

export default (lessons = [], action) => {
    switch (action.type) {
        case FETCH_LESSON_DETAIL_INCLUDING_CATEGORY:
            return action.payload;
        default:
            return lessons;
    }
}