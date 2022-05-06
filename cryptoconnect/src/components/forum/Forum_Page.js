import Sidebar from "./Sidebar";
import Post from "./Post";
import './Forum.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getPostCategory, getPostFromTopic } from "../../redux_BITS/actions/post";


export default function ForumPage() {
  const postList = useSelector((state) => state?.posts)
  const post_categories = useSelector((state) => state.post_categories);
  const { authData } = useSelector((state) => state?.authReducer)
  const dispatch = useDispatch()
  const { post_category_id } = useParams()
  useEffect(() => {
    dispatch(getPostCategory());
    dispatch(getPostFromTopic(post_category_id))
  }, [dispatch])
  console.log(post_categories)
  return (
    <div class="container-fluid Forum">
      <div class="row">
        <div class="col-lg-4">
          <Sidebar post_categories={post_categories} />
        </div>
        
        <div class="col-lg-6 ">
          {postList?.map((element) => {
            return (
              <Post post={element}/>
            )
          })}
        </div>

        <div class="col-2 mt-3">
          {authData && <button style={{backgroundColor: "black"} } class='btn btn-dark mt-3'><a href="/create_post">Create new Post</a></button> }
        </div>
      </div>
    </div>
  );
}
