import { Container, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TrendingCoins } from '../../../config/api';
import { CryptoState } from '../../../CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  bannerCarousel: {
    height: "80%",
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20

  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white"
  }
  

}))

export function CryptoFormatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


export default function Carousel() {
  
  const classes = useStyles()

  const [trending, setTrending] = useState([])

  const { currency, symbol } = CryptoState()

  const fetchTrendingCoins = async  () => {
    const { data } = await axios.get(TrendingCoins(currency))
    setTrending(data)
  }

  useEffect(() => {
    fetchTrendingCoins()
  }, [currency])

  const items = trending.map((coin) => {

    let profit = coin.price_change_percentage_24h >=0


    return (
      <Link
      className={classes.carouselItem}
      to=''
      >
        <img
          src={coin?.image}
          alt={coin.name}
          style={{marginBottom: 10, height:"20%", width: "20%"}}
        />
        <span>
          {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500
              }}
            >
              {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>

            <div style={{fontSize: 22}}>
              {symbol} {CryptoFormatNumber(coin?.current_price.toFixed(2 ))}
            </div>
        </span>

      </Link>
    )
  })

  const responsive = {
    0: {
      items:2,
    },
    512: {
      items:4,
    }
  }

  

  return (
    <div className={classes.bannerCarousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1100}
        animationDuration={1700}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
        disableButtonsControls
      />
    </div>
  )
}
