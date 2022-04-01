
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table_of_other_coins from './components/coin_item/Table_of_other_coins.js';
import Chosen_coins from './components/coin_item/Chosen_coin';
import Coin_note from './components/coin_item/Coin_note';

function App() {
  return (
    <div className="App">
      <div>
        <Chosen_coins />
        <Coin_note />
      </div>
    </div>
  );
}

export default App;
