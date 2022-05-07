import axios from 'axios';
const endPoint = "http://localhost:9000"

// get Post category
export const fetchAllCategories = () => axios.get(endPoint + '/forums/getPostCategory');
// get post for
export const fetchPostsForTopic = (post_category_id) => axios.get(endPoint + "/forums/getPost/" + post_category_id)

export const likePost = (post_id, user_id) => axios.put(endPoint + "/forums/posts/like/" + user_id, {
    _id: post_id
})
export const dislikePost = (post_id, user_id) => axios.put(endPoint + "/forums/posts/dislike/" + user_id, {
    _id: post_id
})
export const addPost = (newPost) => axios.post(endPoint + '/forums/posts/add', newPost, {
    headers: {
        "Content-Type": 'multipart/form-data'
    }
})

export const updatePost = (updatePost) => axios.put(endPoint + '/forums/posts/update', updatePost)

export const deletePost = (deletePost) => axios.delete(endPoint + '/forums/posts/delete/' + deletePost)

export const fetchPostDetail = (post_id) => axios.get(endPoint + '/forums/getPostDetail/' + post_id)

export const fetchPostDetailIncludingCategory = (post_id) => axios.get(endPoint + '/forums/getPostDetailIncludingCategory/'+ post_id)

export const addComment = (comment) => axios.post(endPoint + '/postdetails/comment', comment);

export const updateComment = (comment) => axios.put(endPoint + '/postdetails/comment/update', comment);

export const deleteComment = (comment_id) => axios.delete(endPoint + '/postdetails/comment/delete/' + comment_id);

export const fetchCommentForPost = (post_id) => axios.get(endPoint + '/forums/getPostDetail/getComment/' + post_id)

export const fetchCommentForPostIncludingAva = (post_id) => axios.get(endPoint + '/forums/getPostDetail/getCommentIncludingAva/' + post_id)


