import React from 'react';
// import { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router';
import Sidebar from './Sidebar';
// import CreatePost from './CreatePost';
import CommentSection from './Comment_Section';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import './Forum.css'


// import { countTimeDiff } from '../../utils';

const PostDetail = () => {
  //    const [isEditing, setIsEditing] = useState(false);
  //   const [file, setFile] = useState(null);
  //   coonst [showCreatePostForm, setShowCreatePostForm] = useState(false);
  //  const [title, setTitle] = useState('');
  //   const [content, setContent] = useState('');
  //   const [catId, setCatId] = useState([]);
  //   const [cate, setCate] = useState('');
  //   const { id } = useParams();
  //   const currentTitle = useRef(title);
  //   const currentContent = useRef(content);
  //   const currentFile = useRef(file);
  //   const endPoint = `http://localhost:9000/forums/posts/${id}`;
  //   const [postDetail, setpostDetail] = useState({});
  //   const currentUser = JSON.parse(localStorage.getItem('user'));

    // useEffect(() => {
    //     fetchPostDetail();
    //     fetchPostComment();
    //     getCat();
    // }, []);

    // const fetchUserInfo = (passId, oldData, setFunction) => {
    //     fetch(`http://localhost:9000/profile/profiledetails/${passId}`)
    //         .then((res) => res.json())
    //         .then((dataProfile) =>
    //             setFunction({ ...oldData, username: dataProfile.username })
    //         );
    // };
    // const getCat = async () => {
    //     try {
    //         const res = await axios.get(
    //             'http://localhost:9000/post_categories/'
    //         );
    //         console.log('ressssss', res);
    //         const myCat = res?.data || {};
    //         setCatId(myCat);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // {
    //     /*Update Delete for Post*/
    // }
    // const handleDelete = async () => {
    //     try {
    //         await axios.delete(`http://localhost:9000/forums/posts/${id}`);
    //         window.location.replace('/');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // const handleEdit = () => {
    //     if (isEditing) {
    //         setIsEditing(false);
    //     } else {
    //         setIsEditing(true);
    //     }
    // };

    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     const updatedPost = {
    //         title,
    //         content,
    //         image: file,
    //         post_category_id: cate,
    //     };
    //     console.log(updatedPost);
    //     if (file) {
    //         const data = new FormData();
    //         const fileName = Date.now() + file.name;
    //         data.append('name', fileName);
    //         data.append('file', file);
    //         updatedPost.image = fileName;
    //         console.log(updatedPost);
    //     }
    //     try {
    //         await axios.put(
    //             'http://localhost:9000/forums/posts/' + postDetail._id,
    //             updatedPost
    //         );
    //         window.location.replace(
    //             'http://localhost:3000/forum/post/postdetail/' + postDetail._id
    //         );
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const fetchPostDetail = () => {
    //     fetch(endPoint)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             fetchUserInfo(data.user_id, data, setpostDetail);
    //         });

    // };
    // const [postCommentList, setPostCommentList] = useState([]);
    // const fetchPostComment = () => {
    //     fetch(`http://localhost:9000/forums/comment/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             data.map(async (commentElement) => {
    //                 let newElement = {};
    //                 await fetch(
    //                     `http://localhost:9000/profile/profiledetails/${commentElement.user_id}`
    //                 )
    //                     .then((res) => res.json())
    //                     .then(
    //                         (data) =>
    //                         (newElement = {
    //                             ...commentElement,
    //                             username: data.username,
    //                         })
    //                     )
    //                     .then((res) =>
    //                         setPostCommentList((postCommentList) => [
    //                             ...postCommentList,
    //                             res,
    //                         ])
    //                     );
    //             });
    //         });
    // };

    return (
        <div class='container-fluid PostDetail'>
            <div className='row'>
                <div class='col-lg-4 ps-5 pe-5'>
                    <Sidebar
                        // showCreatePostForm={showCreatePostForm}
                        // showForm={(showCreatePostForm) =>
                        //     setShowCreatePostForm(showCreatePostForm)
                        // }
                    />
                </div>

                <div class='col-lg-6'>
                    {/* {showCreatePostForm && <CreatePost />} */}
                    <div class='row'>
                        <article class="detail-article">
                            <header class='my-4'>
                                <h1 className='fw-bolder'>
                                    {
                                    // postDetail.title
                                    }
                                    Post Title
                                </h1>
                                {/* {isEditing ? (
                                    <textarea
                                        placeholder='Enter new title'

                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    >
                                    </textarea>

                                ) : (null

                                )}{' '} */}
                                <p class='text-muted fst-italic'>
                                    Username - Last edited{' '}
                                    {/* {countTimeDiff(postDetail.updatedAt)} by{' '}
                                    {postDetail.username} */}
                                </p>
                                <hr class="sidebar-hr"/>
                                <p class='fw-normal'>
                                    Categories: 
                                    <button class='btn btn-light btn-sm cat-button'>
                                        Urgent
                                    </button>
                                    <button class='btn btn-light btn-sm cat-button'>
                                        Popular
                                    </button>
                                </p>
                            </header>
                            <figure class='img-fluid'>
                                <img src={"https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k="} class="d-block w-100 img-fluid" alt="..." />
                                A caption for the above image.
                            </figure>

                            {/* {isEditing ? (
                                <input
                                    type='file'
                                    class='custom-file-input'
                                    id='inputGroupFile01'
                                    onChange={(e) => setFile(e.target.files[0])}
                                />

                            ) : (null

                            )} */}
                            <section
                                className='mb-4 '
                                style={{ textAlign: 'justify' }}
                            >
                                <p className='lh-base mb-4 fs-5 lead'>
                                    {/* {postDetail.content} */}
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                </p>
                                {/* {isEditing ? (
                                    <textarea
                                        placeholder='Please enter content'
                                        onChange={(e) => {
                                            setContent(e.target.value);
                                        }}
                                    >
                                    </textarea>
                                ) : (null

                                )} */}

                            </section>
                            <section>
                                {/* {isEditing ? (
                                    <select
                                        class={`custom-select`}
                                        id='inputGroupSelect01'
                                        style={{ height: '35px' }}
                                        onChange={(e) =>
                                            setCate(e.target.value)
                                        }
                                    >
                                        <option selected>
                                            Choose Category
                                        </option>
                                        {catId.map((cate) => (
                                            <option value={cate._id}>
                                                {cate.name}
                                            </option>
                                        ))}
                                    </select>
                                ) : (null)
                                } */}
                            </section>
                            
                            {
                            // currentUser.id === postDetail.user_id && (
                                <>
                                    <button
                                        type='button'
                                        className='btn btn-danger delete-btn'
                                        // onClick={handleDelete}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type='button'
                                        className='btn btn-secondary edit-btn'
                                        // onClick={handleEdit}
                                    >
                                        Edit
                                    </button>
                                </>
                            // )
                            }
                            {/* {isEditing && (
                                <button
                                    type='button'
                                    className='btn btn-secondary'
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                            )} */}
                        </article>
                        <hr class="sidebar-hr"/>
                        <CommentSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
