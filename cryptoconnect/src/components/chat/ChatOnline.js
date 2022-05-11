import { makeStyles } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPersonalInfo } from "../../redux_BITS/actions/profile"

const emptyArray = []
export default function ChatOnline({ onlineUsers, currentUserId, setCurrentChat, getConversations }) {

  const useStyle = makeStyles(() => ({
    ChatOnline: {
      marginTop: "10px",
      overflowY: "scroll",
      height: "100vh",
    },
    ChatOnlineFollowings: {
      display: "flex",
      alignItems: "center",
      fontWeight: "500",
      marginTop: "15px"

    },
    ChatOnlineImgContainer: {
      position: "relative",
      marginRight: "10px",
    },
    ChatOnlineImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "1px solid white",

    },
    ChatOnlineBadge: {
      position: "absolute",
      width: "13px",
      height: "13px",
      borderRadius: "50%",
      backgroundColor: "limegreen",
      top: "0",
      right: "0",
    }





  }))
  const classes = useStyle()


  const { authData, role } = useSelector((state) => state.authReducer)


  const [followings, setFollowings] = useState([])
  const [onlineFollowings, setOnlineFollowings] = useState([])
  const [offlineFollowings, setOfflineFollowings] = useState([])



  //fetch currentUserId's followings
  const getFollowings = async (req, res) => {
    try {
      const res = await axios.get("http://localhost:9000/profilePage/personalinfo/" + currentUserId);
      setFollowings(res.data.followings);
      // console.log(res.data.followers)
    } catch (err) {
      console.log(err)
    }

  }





  useEffect(() => {
    getFollowings()
  }, [currentUserId])

  

  //set offline and online following's id
  useEffect(async () => {

    function getArraysIntersection(a1, a2) {
      return a1?.filter(function (n) { return a2?.indexOf(n) !== -1; });
    }



    // console.log(followings)
    // console.log(onlineUsers)
    // console.log(getArraysIntersection(followings, onlineUsers))

    setOnlineFollowings(prev => prev = []);
    setOfflineFollowings(prev => prev = []);
    await getArraysIntersection(followings, onlineUsers)?.map((id, idx) => {
      setOfflineFollowings(prev => [])
      const getUser = async (id) => {
        try {
          const res = await axios.get("http://localhost:9000" + "/profilePage/personalinfo/" + id).then((res) => {
            // if (!onlineFollowings.includes(JSON.stringify(res.data))){
            //   console.log("true " + JSON.stringify(res.data))
            setOnlineFollowings(prev => {
              if (!prev.includes(JSON.stringify(res.data))) {
                return [...prev, JSON.stringify(res.data)]
              } 
              else {
                return [...prev]
              }
            })
            // }
          })
        } catch (err) {
          console.log(err)
        }
      }
      getUser(id)
    })



    //get the id of offline followers
    const offlineFollowingsId = followings?.filter(function (x) {
      return onlineUsers?.indexOf(x) < 0;
    });


    

    // setOfflineFollowings(offlineFollowings);
    offlineFollowingsId?.map((id) => {
      const getUser = async (id) => {
        try {
          const res = await axios.get("http://localhost:9000" + "/profilePage/personalinfo/" + id).then((res) => {
            setOfflineFollowings(prev => {
              if (!prev.includes(JSON.stringify(res.data))) {
                return [...prev, JSON.stringify(res.data)]
              }
              else {
                return [...prev]
              }
            })
          })
        } catch (err) {
          console.log(err)
        }
      }
      getUser(id)
    });

    // console.log(offlineFollowingsId)  



  }, [followings, onlineUsers])

  const handleClick = async (user) => {
    try {
      const res = await axios.get("http://localhost:9000/conversations/find/" + currentUserId + "/" + user._id);
      if (res.data === null) {
        const res1 = await axios.post("http://localhost:9000/conversations", 
        {senderId: currentUserId ,receiverId: user._id}
        );
        setCurrentChat(res1.data)
        getConversations()
        
      } else {
        setCurrentChat(res.data)
        getConversations()
      }
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(offlineFollowings)








  return (
    <>
      <div className={classes.ChatOnline}>
        {
          onlineFollowings?.map((f) => {
            f = JSON.parse(f);
            return (
              <div className={classes.ChatOnlineFollowings} onClick={() => handleClick(f)}>
                <div className={classes.ChatOnlineImgContainer}>
                  <img className={classes.ChatOnlineImage} src={!f?.avatar ? "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" : `https://cryptoconnect.s3.amazonaws.com/${f?.avatar}`} alt="Profile Image" />
                  <div className={classes.ChatOnlineBadge}></div>
                </div>

                <span className={classes.ChatOnlineName}>
                  {f.name}
                </span>
              </div>)
          }
          )


        }



        {
          offlineFollowings?.map((f) => {

            f = JSON.parse(f);
            return (
              <div className={classes.ChatOnlineFollowings} onClick={() => handleClick(f)}>
                <div className={classes.ChatOnlineImgContainer}>
                  <img className={classes.ChatOnlineImage} src={!f?.avatar ? "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" : `https://cryptoconnect.s3.amazonaws.com/${f?.avatar}`} alt="Profile Image" />

                </div>

                <span className={classes.ChatOnlineName}>
                  {f.name}
                </span>
              </div>
            )
          }
          )
        }
      </div>
    </>
  )
}