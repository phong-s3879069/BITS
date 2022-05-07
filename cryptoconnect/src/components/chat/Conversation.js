import { makeStyles } from "@material-ui/core"




export default function Conversation() {
  const useStyles = makeStyles(() => ({
    Conversation: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      cursor: "poiter",
      "&:hover": {
        backgroundColor: 'aliceblue',
      }, 
    },

    

    ConversationImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "10px"
    },
    ConversationName: {
      fontWeight: "500",

    }
  }))
  const classes = useStyles()

  


  return (
    <div className={classes.Conversation} class="Coversation mt-3">
      <img className={classes.ConversationImage} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Image"/>
      <span className={classes.ConversationName}>Hien Nguyen</span>
    </div>
  )
}