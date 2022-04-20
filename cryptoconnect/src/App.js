import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import MainPage from './components/main_page/MainPage';
import Table_of_other_coins from './components/coin_item/Table_of_other_coins';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Profile_page from './components/profile_page/Profile_page';
import ForumPage from './components/forum/Forum_Page';
import CreateNewPost from './components/forum/Create_New_Post'
import PostDetail from './components/forum/PostDetailPage';

import News_main_page from './components/News_page/News_main_page';
import News_details_page from './components/News_page/News_details_page';
import News_form from './components/News_page/News_form';
import NewsCategory from "./components/News_page/NewsCategory";
import EditNews from "./components/News_page/EditNews";
import EditPost from "./components/forms/EditPost";
// import CategoryManagement from "./components/News_page/CategoryManagement";
function App() {

  return (
    <div>
      {/* <CreateNewPost></CreateNewPost> */}
      {/* <News_form></News_form> */}
      {/*<CreateNews></CreateNews>*/}
      {/*<CategoryManagement/>*/}
      {/*  <NewsCategory/>*/}
        <News_details_page/>
      {/*  <EditNews/>*/}
        {/*<EditPost/>*/}
        {/*<News_main_page/>*/}
    </div>
        // <div>
        //   <Router>
        //     <div>
        //       <Navbar/>
        //     </div>
        //     <div>
        //       <Routes>
        //         <Route exact path="/" element={<Homepage/>}/>
        //         <Route exact path="/mainpage" element={<MainPage/>} />
        //         <Route exact path="/profile" element={<Profile_page/>}/>
        //         <Route exact path="/forum" element={<ForumPage/>}/>
        //         <Route exact path="/create_post" element={<CreateNewPost/>}/>
        //         <Route exact path="/post_detail" element={<PostDetail/>}/>
    
        //       </Routes>
        //     </div>
        //   </Router>
        //   </div>
  )
}

export default App;

