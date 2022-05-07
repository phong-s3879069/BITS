import * as moment from 'moment'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { dislike, like } from '../../redux_BITS/actions/post'

import './Forum.css'

export default function Post({ post }) {
  const { authData, role } = useSelector((state) => state?.authReducer)
  const [isLiked, setIsLiked] = useState(false)
  const [voteCount, setVoteCount] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    setVoteCount(post?.votes.length)
  }, [])
  useEffect(() => {
    if (post?.votes.includes(authData?._id)) {
      setIsLiked(true)
    }
  }, [authData])
  return (
    <div class="card mb-4 mt-3 Post">

      <div class="card-header text-muted"
      >
        <div>
          <h4><a
            href={`/profile/${post?.user_id}`}
            style={{ "text-decoration": "none", color: "white" }}>
            {post?.users[0].name}
          </a></h4>
          <span class="float-end">
            {moment(post?.createdAt).fromNow()}
          </span>
        </div>
      </div>
      <a href={`/postdetail/${post._id}`} style={{ "textDecoration": "none", color: "black" }}>
        <div class="card-body">
          <h3 class="card-title text-light">
            {post?.title}
          </h3>
          <p class="class-text text-light">
            {post?.content && post?.content && post?.content.length > 400
              ? post?.content.substring(0, 399) + '......'
              : post?.content}
          </p>
        </div>
        <div class="img">
          <img
            class="card-img-bottom img-fluid post-img mx-auto d-block"
            src={`https://cryptoconnect.s3.amazonaws.com/${post?.images}`}
            alt="post-image"

          />
        </div>
      </a>

      <div class="card-footer">
        <span class='mt-2' style={isLiked ? { color: "#0d6efd" } : { color: 'white' }} onClick={() => {
          if (role) {
            if (!isLiked) {
              dispatch(like(post?._id, authData?._id))
              setVoteCount(voteCount + 1)
            } else {
              dispatch(dislike(post?._id, authData?._id))
              setVoteCount(voteCount - 1)
            }
            setIsLiked(!isLiked);
          }
        }}>
          <i class="bi bi-hand-thumbs-up"></i>
          <span class="numberOfLikes p-2 bd-highlight" >
            {voteCount} Likes
          </span>
        </span>
        <span class="numberOfLikes p-2 bd-highlight">
          <a href={`/postdetail/${post?._id}`} style={{ "textDecoration": "none", color: "white" }}><i class="bi bi-reply"></i> <span className='ms-2'>Replies</span></a>
        </span>
        {/* </span> */}
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
  ;

}