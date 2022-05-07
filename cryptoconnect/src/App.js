import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'font-awesome/css/font-awesome.min.css';
import MainPage from './components/main_page/MainPage';
// import Table_of_other_coins from './components/coin_item/Table_of_other_coins';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Profile_page from './components/profile_page/Profile_page';
import News_main_page from './components/News_page/News_main_page';
import ForumPage from './components/forum/Forum_Page';
// import CreateNewPost from './components/forum/Create_New_Post'
import PostDetail from './components/forum/PostDetailPage';
import AddAdmin from './components/forms/AddAdmin';
import Login from './components/login_signup/Login';
import Signup from './components/login_signup/Signup';
import Lessons_main_page from './components/lessons_page/Lessons_main_page';
import { useDispatch, useSelector } from 'react-redux';
import { getRole } from "./redux_BITS/actions/user";
import { useEffect } from "react";
import CreateNewPost from './components/forum/Create_New_Post'

import {makeStyles} from '@material-ui/core' //Material UI
import Chosen_coins from './components/coin_item/chosen_coin';
import Chat from './components/chat/Chat';

require("regenerator-runtime/runtime");
export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRole())
  }, [])
  const useStyles = makeStyles(() => ({
    App: {
      minHeight: "100vh",
      backgroundColor:"#0B1A2F",
    },
  }))
  const classes = useStyles()
  return (
    <div>
      <Router>
        <div>
          <Navbar/>
        </div>
        <div className={classes.App}>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact classname={classes.MainPage} path="/mainpage" element={<MainPage/>} />
            <Route exact path="/profile/:user_id" element={<Profile_page/>}/>
            <Route exact path="/forums/:post_category_id" element={<ForumPage/>}/>
            <Route exact path="/create_post" element={<CreateNewPost/>}/>
            <Route exact path="/postdetail/:post_id" element={<PostDetail/>}/>
            <Route exact path="/lessons_page" element={<Lessons_main_page/>}/>
            <Route exact path="/chosen_coin/:id" element={<Chosen_coins/>}/>
            <Route exact path="/news_page" element={<News_main_page/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/chat" element={<Chat/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

