import { makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react"
import axios from "axios"




export default function Conversation({ conversation, currentUser }) {
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

  const [userName, setUserName] = useState("abc")
  const [user, setUser] = useState(null)

  const getUser = (id) => {
    try {
      const res = axios.get("http://localhost:9000" + "/profilePage/personalinfo/" + id).then((res) => {
        setUser(res.data)
      })
    } catch(err) {
      console.log(err)
    }   
  }
  
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id)
    getUser(friendId)
  }, [conversation, currentUser])

  


  return (
    <div className={classes.Conversation} class="Coversation mt-3">
      <img className={classes.ConversationImage} src={!user?.avatar ? "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" : user?.avatar} alt="Profile Image"/>
      <span className={classes.ConversationName}>{user?.name}</span>
    </div>
  )
}