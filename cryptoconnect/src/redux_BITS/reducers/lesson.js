import { CREATE_LESSON, DELETE_LESSON, FETCH_LESSON_BY_TOPIC, FETCH_LESSON_DETAIL, FETCH_LESSON_DETAIL_INCLUDING_CATEGORY, UPDATE_LESSON } from "../constants/actionTypes";

export default (lessons = [], action) => {
    switch (action.type) {
        case FETCH_LESSON_BY_TOPIC:
            return action.payload;
        case CREATE_LESSON:
            console.log("CREATE_LESSON");
            return [...lessons, action.payload];
        case UPDATE_LESSON:
            console.log("UPDATE_LESSON");
            return [...lessons, action.payload];
        case DELETE_LESSON:
            console.log("DELETE_LESSON");
            return posts.filter((lesson) => lesson._id != action.payload)
        case FETCH_LESSON_DETAIL:
            return action.payload;
        case FETCH_LESSON_DETAIL_INCLUDING_CATEGORY:
            return action.payload;
        default:
            return lessons;
    }
}