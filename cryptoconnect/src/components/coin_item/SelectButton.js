import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #A5ABFF",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 5,
      paddingRight: 5,
      marginLeft: 5,
      fontSize: 15,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#A5ABFF" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#A5ABFF",
        color: "black",
      },
      width: "5%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;