import { FETCH_COMMENT_FOR_POST, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, FETCH_COMMENT_FOR_POST_INCLUDING_AVA } from "../constants/actionTypes";
export default (comments = [], action) => {
    switch (action.type) {
        case FETCH_COMMENT_FOR_POST:
            return action.payload;
        case FETCH_COMMENT_FOR_POST_INCLUDING_AVA:
            return action.payload;
        case ADD_COMMENT:
            return [...comments, action.payload];
        case UPDATE_COMMENT:
            return [...comments, action.payload];
        case DELETE_COMMENT:
            console.log(comments.filter((comment) => comment._id != action.payload))
            return comments.filter((comment) => comment._id != action.payload);
        default:
            return comments;
    }
}