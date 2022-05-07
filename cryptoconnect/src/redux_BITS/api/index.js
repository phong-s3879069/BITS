import axios from 'axios'

const endPoint = "http://localhost:9000";

export const fetchPostDetail = (post_id) => axios.get(endPoint + '/forums/getPostDetail/' + post_id)
