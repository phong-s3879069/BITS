import { useEffect, useState } from "react";
import './Forum.css'

export default function Post(props) {
    // const new_like = "http://localhost:9000/vote/addvote"
    // const dislike = "http://localhost:9000/vote/deletevote"
    // const [liked, setLiked] = useState(false)
    // const [numberOfVotes, setnumberOfVotes] = useState()
    // const [user, setUser] = useState()
    // const [followState, setFollowState] = useState(false)
    // const currentUser = JSON.parse(localSt.getItem("user"))

    // useEffect(() => {
    //     if(props.isUser && props.element.vote.includes(currentUser.id)){
    //       setLiked(true)
    //     }
    // }, [props.element.vote, props.isUser])

    // const follow = () => {
    //   fetch(`http://localhost:9000/user/${currentUser.id}/follow`, {
    //     method: 'PUT',
    //      headers: {
    //        'Content-Type': 'application/json'
    //      },
    //      body: JSON.stringify({id: props.element.user_id})
    //   })
    //   .then(response => response.json())
    //   .then(data => setUser(data))
    // }

    // const unFollow = () => {
    //   fetch(`http://localhost:9000/user/${currentUser.id}/unfollow`, {
    //     method: 'PUT',
    //      headers: {
    //        'Content-Type': 'application/json'
    //      },
    //      body: JSON.stringify({id: props.element.user_id})
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     setUser(data)
    //   })
    // }

    // const create_like = (post_id) => {
    //   fetch(new_like, {
    //     method: 'PUT',
    //      headers: {
    //        'Content-Type': 'application/json'
    //      },
    //      body: JSON.stringify({ post_id: post_id, user_id: currentUser.id})
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("VOTE DATA" + JSON.stringify(data))
    //     setnumberOfVotes(data)})
    // }

    // const dis_like = (post_id) => {
    //   fetch(dislike, {
    //     method: 'PUT',

    //      headers: {

    //        'Content-Type': 'application/json'

    //      },

    //      body: JSON.stringify({ post_id: post_id, user_id: currentUser.id})
    //   })
    //   .then(response => response.json())
    //   .then(data => {setnumberOfVotes(data)})
    // }

    // useEffect(() => {
    //   var followers = props.element.followers
    //   if (currentUser != null && followers && followers.includes(currentUser.id) ) {
    //     setFollowState(true)
    //   }
    // }, [props.element.followers])

    return (
      <div class="card mb-4 mt-3 Post">
        
        <div class="card-header text-muted" 
        // id={props.element._id}
        >
          <div>
          <a
            // href={`/profile/${props.element.user_id}`}
            // style={{ "text-decoration": "none", color: "black" }}
          >
            Posted by: 
            {/* {props.element.username ? props.element.username : props.username}&nbsp;&nbsp; */}
          </a>
          {/* {props.createdAt}
          {props.isProfilePage ? "" : (props.isUser && currentUser.id !== props.element.user_id ?<button id="flw-btn" type="button" class="btn btn-primary float-right"
          style={currentUser != null && followState ? {background: "grey"} : {}} 
          onClick={currentUser != null && (followState ? () => {setFollowState(false); unFollow();} : () => {setFollowState(true); follow();})}>
              {followState ? "Unfollow" : "Follow"}
          </button> : "")} */}
          </div>
          <span class="pull-right">
            {/* &nbsp;&nbsp; */}
            </span>
          </div>
          <a
            // href={`/forum/post/postdetail/${props.element._id}`}
            style={{ "textDecoration": "none", color: "black" }}
          >
          <div class="card-body">
            <h3 class="card-title text-light">
              {/* {props.element.title}  */}
              Title
            </h3>
            <p class="class-text text-light">
              {/* {props.element.content} */}
              This is the content of the post
              This is the content of the post
              This is the content of the post
              </p>
          </div>
          <div class="img">
            <img
              class="card-img-bottom img-fluid post-img mx-auto d-block"
              src="https://media.istockphoto.com/photos/bitcoin-picture-id1145592947?k=20&m=1145592947&s=612x612&w=0&h=2Dwg5QPGB-UljX35NY6jj1OzIpx3oycyHZUvElMEgkM="
              alt="post-image"
              
            />
          </div>
        </a>

        <div class="card-footer text-muted">
          <span>
            <span 
            // style={props.isUser && liked ? {color: "#0d6efd" } : {}} 
            // onClick= {props.isUser && (liked ? () => {setLiked(false); dis_like(props.element._id)} : () => {setLiked(true); create_like(props.element._id)})}
            >
              <i
                class="fa fa-thumbs-up hover-icon vote-button w3-large"
                id="post-{{$post->id}}-up"
                value="0"
              ></i>
            </span>
            <span class="numberOfLikes ms-2">
              {/* {numberOfVotes ? numberOfVotes.vote.length : props.element.vote.length}  */}
              Likes
            </span>
          </span>
          {/* &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; */}
          <a>
            <i class=" fas fa-comment hover-icon w3-large"></i>
            Comment
          </a>
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
        </div>
      </div>
    );
  ;
 
}