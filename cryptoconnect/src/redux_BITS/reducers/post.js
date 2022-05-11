import { CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_POST_DETAIL, FETCH_BY_TOPIC, LIKE, DISLIKE, FETCH_POST_DETAIL_INCLUDING_CATEGORY, FETCH_OWNED_POSTS, FETCH_ALL_POST } from "../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POST:
            return action.payload;
        case FETCH_BY_TOPIC:
            return action.payload;
        case LIKE:
            return posts;
        case DISLIKE:
            return posts;
        case CREATE_POST:
            console.log("CREATE_POST");
            return [...posts, action.payload];
        case UPDATE_POST:
            console.log("UPDATE_POST");
            return [...posts, action.payload];
        case DELETE_POST:
            console.log("DELETE POST");
            return posts.filter((post) => post._id != action.payload)
        case FETCH_POST_DETAIL:
            return action.payload;
        case FETCH_OWNED_POSTS:
            return action.payload;
        case FETCH_POST_DETAIL_INCLUDING_CATEGORY:
            return action.payload;
        default:
            return posts;
    }
}