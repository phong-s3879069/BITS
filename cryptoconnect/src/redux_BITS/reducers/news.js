import { CREATE_NEWS, 
    DELETE_NEWS, 
    FETCH_NEWS_BY_TOPIC, 
    FETCH_NEWS_DETAIL, 
    FETCH_NEWS_DETAIL_INCLUDING_CATEGORY, 
    UPDATE_NEWS } from "../constants/actionTypes";

export default (news = [], action) => {
    switch (action.type) {
        case FETCH_NEWS_BY_TOPIC:
            return action.payload;
        case CREATE_NEWS:
            console.log("CREATE_NEWS");
            return [...news, action.payload];
        case UPDATE_NEWS:
            console.log("UPDATE_NEWS");
            return [...news, action.payload];
        case DELETE_NEWS:
            console.log("DELETE_NEWS");
            return news.filter((news) => news._id != action.payload)
        case FETCH_NEWS_DETAIL:
            return action.payload;
        case FETCH_NEWS_DETAIL_INCLUDING_CATEGORY:
            return action.payload;
        default:
            return news;
    }
}