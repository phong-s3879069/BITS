import authHeader from "../../components/login_signup/authHeader";
import axios from 'axios';
const endPoint = "http://localhost:9000/auth"
export const checkAdmin = () => axios.get(endPoint + "/admin", {headers: authHeader()})

export const checkUser = () => axios.get(endPoint + "/user", {headers: authHeader()})

export const signUp = (registrant) => axios.post(endPoint + "/signup", registrant)

export const login = (data) => axios.post(endPoint + '/login', data)

export const addAdmin = (data) => axios.post(endPoint + '/addadmin', data);
