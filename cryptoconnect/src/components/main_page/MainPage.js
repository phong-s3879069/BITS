
import CryptocurrencyTable from "./CryptocurrencyTable";
import Banner from "./Banner/Banner";
import './MainPage.css';
import { makeStyles, AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme, colors } from "@material-ui/core";

export default function MainPage() {
    const useStyles = makeStyles(() => ({
        MainPage: {
            marginTop: "3.6%",
            backgroundColor: "#0B1A2F",
            color: "white",
            paddingBottom:"200px"
            
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