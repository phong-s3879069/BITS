import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainPage from './components/main_page/MainPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
    </div>
  );
}

export default App;

