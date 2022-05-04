import './Coin_item.css';
import { makeStyles, AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme, colors, LinearProgress, CircularProgress } from "@material-ui/core";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import axios from 'axios';
import { HistoricalChart, SingleCoin } from '../../config/api';
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';

import {chartDays} from '../../config/data'
import SelectButton from './SelectButton';
  

  
  

export default function Chart({ coin }) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );



  const useStyles = makeStyles(() => ({
    Coin: {
      paddingTop: "5%",
      backgroundColor: "#172D55"

    },

    Chart: {
      width: "90%",
      // display: "flex",
      // flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "10%",
      // marginTop: 25,
      

    
    }

  }))
  const classes = useStyles()

  const { currency, symbol } = CryptoState()

  const [chartData, setChartData] = useState()
  const [days, setDays] = useState(1)
  const [flag, setFlag] = useState(false)
  

  const fetchChartData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency))
    setChartData(data.prices)
    console.log(chartData)
    setFlag(true)
    
    
  }

  useEffect(() => {
    fetchChartData()

  }, [currency, days])



  return (
    <div className={classes.Chart}>
      {
        (!chartData) ? (
          <CircularProgress
            style={{
              color: "#0B1A2F"
            }}
            size={250}
            thickness={1}
          />
          ) : (
          <div>
            <Line
              style={{
                width: "100%"
              }}
              data={{
                labels: chartData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: chartData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "white",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setFlag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>

          </div>
          
          
          
          ) 

      }
      
    </div>
  )

}