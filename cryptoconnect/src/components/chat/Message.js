import { colors, makeStyles } from "@material-ui/core"
import './message.css'



export default function Message({ own }) {
  const useStyles = makeStyles(() => ({
    Message: {
      // display: "flex",
      // flexDirection: "column",
      marginTop: "20px",
      
      
    
    },
    MessageTop: {
      // display: "flex",
    },
    MessageBottom: {
      fontSize: "12px"
    },
    MessageImage: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "10px",


    },
    MessageText: {
      padding: "10px",
      borderRadius: "20px",
      backgroundColor: "#1B7AFF",
      color: "black",
      maxWidth: "300px"
    }

  }))
  const classes = useStyles()

  


  return (
    <div className={classes.Message} class={own ? "Message own" : "Message"}>
     
      <div className={classes.MessageTop}>
        <img className={classes.MessageImage} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Picture"/> 
        <p class="message-text"> This is the message text. This is a text.This is the message text. This is a text</p>
      </div>
      <div className={classes.MessageBottom}>
        4 hours ago
      </div>
      
    </div>
  )
}