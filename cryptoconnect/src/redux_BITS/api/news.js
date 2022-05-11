import axios from 'axios';
const endPoint = "http://localhost:9000"

// get News category
export const fetchAllNewsCategories = () => axios.get(endPoint + '/newsPage/getNewsCategory');
// get News for
export const fetchNewsForTopic = (news_category_id) => axios.get(endPoint + "/newsPage/getNews/" + news_category_id)

export const addNews = (newNews) => axios.post(endPoint + '/newsPage/news/add', newNews, {
    headers: {
        "Content-Type": 'multipart/form-data'
    }
})

export const updateNews = (updateNews) => axios.put(endPoint + '/newsPage/news/update', updateNews)

export const deleteNews = (deleteNews) => axios.delete(endPoint + '/newsPage/news/delete/' + deleteNews)

export const fetchNewsDetail = (news_id) => axios.get(endPoint + '/newsPage/getNewsDetail/' + news_id)

export const fetchNewsDetailIncludingCategory = (news_id) => axios.get(endPoint + '/newsPage/getNewsDetailIncludingCategory/'+ news_id)




