import { FETCH_ALL_LESSON_CATEGORY } from "../constants/actionTypes";

export default (lesson_categories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_LESSON_CATEGORY:
            return action.payload;
        default:
            return lesson_categories;
    }
}