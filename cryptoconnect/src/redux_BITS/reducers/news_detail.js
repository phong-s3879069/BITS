import {
    FETCH_NEWS_DETAIL_INCLUDING_CATEGORY
} from "../constants/actionTypes";

export default (news = [], action) => {
    switch (action.type) {
        case FETCH_NEWS_DETAIL_INCLUDING_CATEGORY:
            return action.payload;
        default:
            return news;
    }
}