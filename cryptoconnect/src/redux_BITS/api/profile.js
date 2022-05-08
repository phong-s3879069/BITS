import axios from 'axios'

const endPoint = "http://localhost:9000/profilePage";

export const fetchPersonalInfo = (id) => axios.get(endPoint + '/personalinfo/' + id);
export const updateAvatar = (user_id, avatar) => axios.put(endPoint + '/ava/'+ user_id, avatar, {
    headers: {
        "Content-Type": 'multipart/form-data'
    }
});
export const updateProfile = (updateProfile) => axios.put(endPoint + '/personalinfo/update/', updateProfile)
export const userFollow = (user_id, my_id) => axios.put(endPoint + '/personalinfo/follow/' + my_id, {id: user_id} )
export const userUnfollow = (user_id, my_id) => axios.put(endPoint + '/personalinfo/unfollow/' + my_id, {id: user_id} )
export const fetchOwnedPosts = (user_id) => axios.get(endPoint + '/personalinfo/ownedposts/' + user_id);
