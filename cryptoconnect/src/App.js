import './App.css';
import Lessons_main_page from './components/Lessons_page/Lessons_main_page';
import Lessons_form from './components/Lessons_page/Lessons_form';
import Lessons_detail_page from './components/Lessons_page/Lesson_detail_page';
import Lesson_edit from './components/Lessons_page/Lesson_edit';
function App() {
    return(
    <div className="App">
         <Lessons_main_page></Lessons_main_page>
    </div> 
    )
}

export default App;
