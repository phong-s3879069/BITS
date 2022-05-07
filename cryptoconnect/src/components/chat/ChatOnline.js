import { makeStyles } from "@material-ui/core"

export default function ChatOnline() {

  const useStyle = makeStyles(() => ({
    ChatOnline: {
      marginTop:"10px"
    },
    ChatOnlineFollowings: {
      display: "flex",
      alignItems: "center",
      fontWeight: "500",

    },
    ChatOnlineImgContainer: {
      position:"relative",
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



  return (
    <div className={classes.ChatOnline}>
      <div className={classes.ChatOnlineFollowings}>
        <div className={classes.ChatOnlineImgContainer}>
          <img className={classes.ChatOnlineImage} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Image"/>
          <div className={classes.ChatOnlineBadge}></div>
        </div>

        <span className={classes.ChatOnlineName}>
          Hien Nguyen
        </span>
      </div>
    </div>
  )
}