import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainPage from './components/main_page/MainPage';
import Table_of_other_coins from './components/coin_item/Table_of_other_coins';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Profile_page from './components/profile_page/Profile_page';
import News_main_page from './components/News_page/News_main_page';
function App() {
  return (
    <div className="App">
      <News_main_page></News_main_page>
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
    //       </Routes>
    //     </div>
    //   </Router>
    // </div>
  );
}

export default App;

