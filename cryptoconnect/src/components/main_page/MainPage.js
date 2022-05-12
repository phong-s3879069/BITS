
import CryptocurrencyTable from "./CryptocurrencyTable";
import Banner from "./Banner/Banner";
import './MainPage.css';
import { makeStyles } from "@material-ui/core";



export default function MainPage() {
    const useStyles = makeStyles(() => ({
        MainPage: {
            marginTop: "2.6%",
            // margin:"auto",
            backgroundColor: "#0B1A2F",
            color: "white",
            paddingBottom:"200px",
            margin: "0",
            padding: "0",
            // boxing: border-box;
            // scroll-behavior=: smooth;
            
        }

    }))
    const classes = useStyles()

    return (
        <div className={classes.MainPage}>

            <Banner />

            <CryptocurrencyTable/>
        </div>
    )
}