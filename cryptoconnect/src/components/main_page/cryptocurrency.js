import {useState} from 'react';

export default function Cryptocurrency(){
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <tr >
                    <td></td>
                    <td>
                        <img src={clicked == false ? "https://cdn-icons-png.flaticon.com/512/1077/1077035.png" : "https://cdn-icons-png.flaticon.com/512/1076/1076984.png"}
                            style={{ width: 30, height: 30 }}
                            onClick={() => { setClicked(!clicked)}} />
                    </td>
                    <td>BTC</td>
                    <td>$30000</td>
                    <td>+24%</td>
                    <td>$30000</td>
                    <td>30000 BTC</td>
                    <td>Chart</td>
        </tr>
    )
}