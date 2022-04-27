import { useState } from "react";
import Cryptocurrency from "./Cryptocurrency";


export default function Coin_table() {
    const count = [1,2,3,4,5]

    const [clicked, setClicked] = useState(false);
    return (
        <div>
            <div class="container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h Change</th>
                    <th scope="col">24h Volume</th>
                    <th scope="col">MarketCap</th>
                    <th scope="col">Last 7d</th>
                    </tr>
                </thead>
                <tbody>
                    {count.map((count) => {
                        return (
                            <Cryptocurrency/>   
                        )
                    })}
                    

                </tbody>
            </table>
                
            </div>
        </div>
    )
}