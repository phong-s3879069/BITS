import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './Forum.css'

const Comment_Section = ({ }) => {
  // const { id } = useParams();

  // const [fetchComment, setFetchComment] = useState([]);
  // const [contentComment, setContentComment] = useState();
  // const currentUser = JSON.parse(localStorage.getItem('user'));

  // useEffect(() => {
  //     getComment();
  // }, []);

  // const getComment = () => {
  //     axios
  //         .get(`http://localhost:9000/forums/comment/${id}`)
  //         .then((response) => {
  //             if (Array.isArray(response?.data)) {
  //                 const temp = response.data.filter((item) =>
  //                     item.hasOwnProperty('user_id')
  //                 );
  //                 const modified = [];
  //                 for (let i = 0; i < temp.length; ++i) {
  //                     const userId = temp[i].user_id;
  //                     axios
  //                         .get(
  //                             `http://localhost:9000/profile/profiledetails/${userId}`
  //                         )
  //                         .then((result) => {
  //                             console.log('result', result?.data);
  //                             if (result?.data) {
  //                                 const { username, name } = result.data;
  //                                 modified.push({
  //                                     ...temp[i],
  //                                     username,
  //                                     name,
  //                                 });
  //                             }
  //                         })
  //                         .catch((error) => console.error(error));
  //                 }
  //                 setFetchComment(modified);
  //             }
  //         })
  //         .catch((error) => console.error(error));
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //         .post('http://localhost:9000/forums/comments', {
  //             content: contentComment,
  //             user_id: currentUser.id,
  //             post_id: id,
  //         })
  //         .catch((err) => {});
  //     window.location.reload();
  // };

  return (
    <section class="CommentSection">
      <div class='mt-5'>
        <div class='card bg-light'>
          <div class='card-body container'>
            <div class='row'>
              <form class='my-4 mx-2'
              // onSubmit={handleSubmit}
              >
                <div className='form-floating'>
                  <textarea
                    className='form-control'
                    placeholder='Leave a comment here'
                    id='floatingTextarea2'
                    style={{
                      height: '100px',
                    }}
                  // onChange={(e) =>
                  //     setContentComment(e.target.value)
                  // }
                  />
                  <label for='floatingTextarea2'>
                    Comments
                  </label>
                </div>
                <button
                  type='submit'
                  className='btn btn-light mt-3 pull-right'
                >
                  Post
                </button>
              </form>
            </div>
            {/* {fetchComment.length > 0 &&
                            fetchComment.map((item) => (
                                <CommentObject data={item} />
                            ))} */}
            <CommentObject />
          </div>
        </div>
      </div>
    </section>
  );
};

const CommentObject = ({ data }) => {
  // const { username, content, _id, user_id } = data || {};
  // const [isEditing, setIsEditing] = useState(false);
  // const [updateDataComment, setUpdateDataComment] = useState();
  // const currentComment = useRef(content);
  // const currentUser = JSON.parse(localStorage.getItem('user'));

  // useEffect(() => {
  //     console.log('data', data);
  // }, []);

  // const handleDeleteComment = () => {
  //     axios
  //         .delete(`http://localhost:9000/forums/comment/${_id}`)
  //         .catch((error) => console.log(error))
  //         .finally(() => window.location.reload());
  // };

  // const handleEditComment = () => {
  //     if (isEditing) {
  //         setIsEditing(false);
  //     } else {
  //         setIsEditing(true);
  //     }
  // };

  // const handleUpdateComment = (e) => {
  //     if (updateDataComment === currentComment.current) {
  //         setIsEditing(false);
  //     } else {
  //         e.preventDefault();
  //         axios
  //             .put(`http://localhost:9000/forums/comment/${_id}`, {
  //                 content: updateDataComment,
  //             })
  //             .catch((error) => console.log(error))
  //             .finally(() => {
  //                 setIsEditing(false);
  //                 window.location.reload();
  //             });
  //     }
  // };

  // const renderButton = () => {
  //     if (user_id === currentUser.id) {
  //         return
  //     }
  // }

  return (
    <div class='row'
    // key={_id}
    >
      <div class='d-flex mb-4'>
        <div class='flex-shrink-0'>
          <img
            class='rounded-circle'
            src='https://dummyimage.com/50x50/ced4da/6c757d.jpg'
            alt='...'
          />
        </div>
        <div class='ms-3'>
          <div class='fw-bold'>{
            // username
          }
            Username
          </div>
          {/* {isEditing ? (
                        <textarea
                            onChange={(e) =>
                                setUpdateDataComment(e.target.value)
                            }
                        >
                            {content}
                        </textarea>
                    ) : (
                        <div>{content}</div>
                    )} */}
          {/* { */}
          {/* user_id === currentUser.id && ( */}
          <div>
            <p>This is the content of the comment.</p>
          </div>
          <>
            <div
              className='btn btn-danger comment-btn'
            // onClick={handleDeleteComment}
            >
              Delete
            </div>
            <div
              className='btn btn-secondary comment-btn'
            // onClick={handleEditComment}
            >
              Edit
            </div>
          </>
          {/* ) */}
          {/* } */}
          {/* {
                    isEditing && ( */}
          <button
            type='button'
            className='btn btn-secondary comment-btn'
          // onClick={handleUpdateComment}
          >
            Update
          </button>
          {/* )
                    } */}
        </div>
      </div>
    </div>
  );
};

export default Comment_Section;