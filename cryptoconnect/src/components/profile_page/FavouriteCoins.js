import React, { useEffect, useState } from "react";
import { CoinList } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'







export default function FavouriteCoins({ userId }) {
    const { authData, role } = useSelector((state) => state.authReducer)


    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState([]);

    const { currency, symbol } = CryptoState();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    const fetchUserSavedCoin = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        console.log(data);   
        try {
            const res = await axios.get("http://localhost:9000/savedCoin/find/" + userId);
            data.map((coin) => {
                if (res.data.includes(coin.id)) {
                    setCoins(prev => [...prev, coin])
                }
            })
        } catch (err) {
            console.log(err)
        }

        
        setLoading(false);
    };  

    const unsaveCoin =  async (id) => {
         await axios.put("http://localhost:9000/savedCoin/delete/" + id + "/" + authData?._id);
         setCoins([])


         fetchUserSavedCoin();
    }

    useEffect(() => {
        fetchUserSavedCoin();
        
    }, [currency, authData]);




    
    return (
        <div class="text-white" style={{
            
        }}>
            <div class="container" style={{
                overflowY: "scroll",
                height: "350px"
            }}>
            <table class="table" style={{
            color: "white",
            
            
        }}>
                <thead>
                    <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h Change</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((Coin) => {
                        const profit = Coin.price_change_percentage_24h > 0;

                        
                        return (
                            <tr>
                                <td>{Coin.market_cap_rank}</td>
                                <td></td>
                                <td>{Coin.id}</td>
                                <td>{symbol}{" "}{numberWithCommas(Coin.current_price.toFixed(2))}</td>
                                <td 
                                    align="left"
                                    style={{
                                      color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                      fontWeight: 500,
                                    }}
                                >{profit && "+"}
                                    {Coin.price_change_percentage_24h.toFixed(2)}%
                                </td>
                                <td>{symbol}{" "}{numberWithCommas(Coin.market_cap)}</td>
                                <td>{authData && <button class="btn btn-danger" onClick={() => unsaveCoin(Coin.id)}>Delete</button>}</td>
                            </tr>
                        )
                    })}
                    

                </tbody>
            </table>
                
            </div>
        </div>
    )
}