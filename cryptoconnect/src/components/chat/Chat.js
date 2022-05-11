import { Button, makeStyles, } from "@material-ui/core"
import ChatOnline from "./ChatOnline"
import Conversation from "./Conversation"
import Message from "./Message"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import { io } from 'socket.io-client';


export default function Chat() {
  
  const useStyles = makeStyles(() => ({
    Chat: {
      paddingTop: "3%",
      backgroundColor: "#0B1A2F",
      height: "100vh - 30vh",
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
      position: "relative",
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
      height: "80vh",
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
      height: "90px",
      padding: "10px"
    },
    ChatSubmitButton: {
      cursor: "pointer",
      backgroundColor: "teal"
    },
    NoConversationText: {
      position: "absolute",
      top: "30%",
      fontSize: "25px",
      cursor: "default",
      color: "lightgrey"
    },
    

  }))
  const classes = useStyles()

  //fetch data of current user
  const { authData, role } = useSelector((state) => state.authReducer)
  

  // const dispatch = useDispatch()

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  //message to be send to the database
  const [newMessage, setNewMessage] = useState("");
  //arrival message from socket.
  const [arrivalMessage, setArrivalMessage] = useState(null)
  //online users
  const [onlineUsers, setOnlineUsers] = useState([])
  
  const scrollRef = useRef();

  

  //fetching conversations
  const getConversations = async () => {
    try {
      const res = await axios.get("http://localhost:9000" + "/conversations/" + authData?._id)
      setConversations(res.data)
    } catch (err) {
      console.log(err)
    }

  }
  //fetching messages
  const getMessages = async () => {
    try {
      const res = await axios.get("http://localhost:9000" + "/messages/" + currentChat?._id)
      //setMessages([])
      setMessages(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  //send new messages to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = {
      sender: authData._id,
      text: newMessage,
      conversationId: currentChat._id
    };
    

    //send message to socket.io
    const receiverId = currentChat.members.find((member) => member !== authData?._id)
    socket.current.emit("sendMessage", {
      senderId: authData?._id,
      receiverId,
      text: newMessage 
    })


    //send message to database
    try {
      const res = await axios.post("http://localhost:9000" + "/messages", result);
      setMessages([...messages, res.data])
      setNewMessage("")
    } catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {
    getConversations()
  }, [authData])

  useEffect(() => {
    getMessages()
  }, [currentChat])

  useEffect(() => {
    console.log(newMessage)
  }, [messages])
  useEffect(() => {
     scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])



  //SOCKET IO

  const socket = useRef();
  //connect to socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8500")
  }, [])

  //add users and get the users list
  useEffect(() => {
    socket?.current.emit("addUser", authData?._id);
    socket?.current.on("getUsers", (users) => {
      console.log("Socket users: " + JSON.stringify(users))
      //set onlineUsers
      let onlineUsers = []
      for (let i = 0; i < users.length; i++) {
        onlineUsers.push(users[i].userId)
      }
      setOnlineUsers(onlineUsers)
    });
  }, [authData])
  

  //getting the arrival messages from socket.io
  useEffect(() => {
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [])

  //update the messages on database if received arrival message
  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages(prev =>[...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  return (
    <div className={classes.Chat}>
      <div className={classes.ChatMenu}>
        <div className={classes.ChatMenuWrapper}>
          <input placeholder="Search for another user..." className={classes.ChatMenuInput}/>
          <div className="conversation-box">
          {conversations.map((c) => (
            <div key={c._id} onClick={() =>
              setCurrentChat(c)

            }>
              <Conversation conversation={c} currentUser={authData} />
            </div>
          ))}
          </div>
          


        </div>
      </div>
      <div className={classes.ChatBox}>
        <div className={classes.ChatBoxWrapper}>
          {
            currentChat ?
              <>
                <div className={classes.ChatBoxTop}>
                  {messages.map((m) =>
                      <div key={m._id} ref={scrollRef}>
                        <Message
                          message={m}
                          own={m.sender === authData?._id}
                        />
                      </div>
                    )
                  }
                  


                </div>
                <div className={classes.ChatBoxBottom}>
                  <textarea placeholder="Write something..." className={classes.ChatMessageInput}

                    onChange={
                      (e) => {
                        setNewMessage(e.target.value);
                      }
                    }
                    value={newMessage}

                  ></textarea>
                  <Button variant="contained" className={classes.ChatSubmitButton}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Send
                  </Button>
                </div>
              </> :
              <span className={classes.NoConversationText}>Open a conversation to start chatting</span>
          }
        </div>

      </div>
      <div className={classes.ChatOnline}>
        <div className={classes.ChatOnlineWrapper}>
          <h2>Followings</h2>
          <hr/>
          <ChatOnline 
          onlineUsers={onlineUsers} 
          currentUserId={authData?._id} 
          setCurrentChat={setCurrentChat}
          getConversations={getConversations}
          />
          
        </div>
      </div>
    </div>
  )
}