import { FETCH_ALL_NEWS_CATEGORY } from "../constants/actionTypes";

export default (news_categories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_NEWS_CATEGORY:
            return action.payload;
        default:
            return news_categories;
    }
}