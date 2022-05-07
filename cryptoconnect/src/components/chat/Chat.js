import { Button, makeStyles, } from "@material-ui/core"
import ChatOnline from "./ChatOnline"
// import {SendIcon} from "@mui/icons-material"
import Conversation from "./Conversation"
import Message from "./Message"

export default function Chat() {
  const useStyles = makeStyles(() => ({
    Chat: {
      paddingTop: "5%",
      backgroundColor: "#0B1A2F",
      height: "100vh",
      display: "flex",
      color: "white",
    },
    ChatMenu: {
      flex: 3.5,
    },
    ChatBox: {
      flex: 5,
    },
    ChatOnline: {
      flex: 3,
    },
    ChatBoxWrapper: {
      padding: "10px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-beteen"
    },
    ChatMenuWrapper: {
      padding: "10px",
      height: "100%",
    },
    ChatOnlineWrapper: {
      padding: "10px",
      height: "100%",
    },
    ChatMenuInput: {
      width: "90%",
      padding: "10px 0",
      border: "none",
      borderBottom: "1px solid grey",
      backgroundColor: "#0B1A2F",
      color: "white",
    },
    ChatBoxTop: {
      height: "100%",
      overflowY: "scroll",
      paddingRight: "10px"
    },
    ChatBoxBottom: {
      marginTop: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

    },
    ChatMessageInput: {
      width: "80%",
      height:"90px",
      padding: "10px"
    },
    ChatSubmitButton: {
      cursor: "pointer",
      backgroundColor: "teal"
    }

  }))
  const classes = useStyles()





  return (
    <div className={classes.Chat}>
      <div className={classes.ChatMenu}>
        <div className={classes.ChatMenuWrapper}>
          <input placeholder="Search for another user..." className={classes.ChatMenuInput} />
          <Conversation />
          <Conversation />

          <Conversation />

          <Conversation />

        </div>
      </div>
      <div className={classes.ChatBox}>
        <div className={classes.ChatBoxWrapper}>
          <div className={classes.ChatBoxTop}>
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
          </div>
          <div className={classes.ChatBoxBottom}>
            <textarea placeholder="Write something..." className={classes.ChatMessageInput}></textarea>
            <Button variant="contained" className={classes.ChatSubmitButton}>
              Send
            </Button>
            
          
          
          </div>
        </div>
      </div>
      <div className={classes.ChatOnline}>
        <div className={classes.ChatOnlineWrapper}>
          <ChatOnline/>
          <ChatOnline/>

          <ChatOnline/>

        </div>
      </div>
    </div>
  )
}