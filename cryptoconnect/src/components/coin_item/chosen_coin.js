import './Coin_item.css';
import { makeStyles, AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme, colors, LinearProgress, CircularProgress } from "@material-ui/core";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import axios from 'axios';
import { HistoricalChart, SingleCoin } from '../../config/api';
import { Line } from 'react-chartjs-2'
import Chart from './Chart';
import './Coin_item.css'

export default function Chosen_coins() {

  const useStyles = makeStyles(() => ({
    Coin: {
      paddingTop: "5%",
      backgroundColor: "#0B1A2F",
      paddingBottom: "5%",
      textAlign: "center",
      fontSize: "20px",
      color: "white"

    },
  }))
  const classes = useStyles()




  const { id } = useParams()
  const [coin, setCoin] = useState()

  const { currency, symbol } = CryptoState()


  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id))
    setCoin(data)

  }

  

  useEffect(() => {
    fetchCoin()
   

  }, [currency])

  const profit = coin?.market_data.price_change_percentage_24h > 0;
  console.log(profit)
  console.log(coin)
  


  function numberWithCommas(x) {
    if (x > 1) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else {
      return x
    }

  }
  if (!coin) return <LinearProgress style={{ backgroundColor: "#0B1A2F" }} />

  return (
    <div class="container-fluid" className={classes.Coin}>
      <div class="row" >
        <div class="col-2" style={{
          textAlign: "center"
        }}>
          <img src={coin?.image.large} alt="crypto sybols" class="" width="30%" />
          <h2>{coin?.symbol.toUpperCase()}/USD</h2>
        </div>
        <div class="col-3 crypto_price_component" >
          <h2 class="crypto_price"
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}>
            {symbol}{" "}
            {numberWithCommas(coin?.market_data?.current_price[currency.toLowerCase()])}

          </h2>

          <h4>{symbol}{" "}{numberWithCommas(Math.floor(coin?.market_data?.current_price[currency.toLowerCase()]))}.00</h4>
        </div>
        <div class="col-2 crypto_price_component">
          <h4 class="crypto_price_label">24H Change</h4>
          <div>
            {
              profit > 0 ?

                <button type="button" class="btn btn-success">
                  {numberWithCommas(coin?.market_data.price_change_percentage_24h.toFixed(2))}%
                </button> :
                <button type="button" class="btn btn-danger">
                  {numberWithCommas(coin?.market_data.price_change_percentage_24h.toFixed(2))}%
                </button>
            }
          </div>
        </div>

        <div class="col-3 crypto_price_component">
          <h4 class="crypto_price_label">24H High</h4>
          <h5>{symbol}{" "}{numberWithCommas(coin?.market_data.high_24h[currency.toLowerCase()])}</h5>
        </div>

        <div class="col-2 crypto_price_component">
          <h4 class="crypto_price_label">24H Low</h4>
          <h5>{symbol}{" "}{numberWithCommas(coin?.market_data.low_24h[currency.toLowerCase()])}</h5>
        </div>

      </div>

      <hr/>

      
      <div class="crypto-chart" className={classes.Chart}>
        <Chart coin={coin}/>
      </div>
    </div>
  )

}