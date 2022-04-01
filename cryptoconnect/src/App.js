import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainPage from './components/main_page/MainPage';
import Table_of_other_coins from './components/coin_item/Table_of_other_coins';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <Table_of_other_coins/>
    </div>
  );
}

export default App;

