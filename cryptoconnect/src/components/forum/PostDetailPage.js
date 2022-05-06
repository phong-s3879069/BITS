import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetail, getCommentForPost } from "../../redux_BITS/actions/post";
import { useParams } from "react-router-dom";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as moment from 'moment'
import { addComment } from "../../redux_BITS/actions/post";
import Sidebar from './Sidebar';
import CommentSection from './Comment_Section';
import './Forum.css'
import EditPost from '../forms/EditPost';

const PostDetail = () => {
    // const dispatch = useDispatch();
    // const { authData } = useSelector((state) => state?.authReducer)

    // const { post_id } = useParams();

    // useEffect(() => {
    //     dispatch(getPostDetail(post_id));
    //     dispatch(getCommentForPost(post_id));
    // }, [dispatch])

    // const post_detail = useSelector((state) => state.posts)
    // const post_comments = useSelector((state) => state.comment)

    // const submit = () => {

    //     const dataArray = new FormData();
    //     dataArray.append("post_id", post_id);
    //     dataArray.append("user_id", authData._id);
    //     dataArray.append("content", commentData.content);
    //     if (commentData.images != null) {
    //         dataArray.append("images", commentData.images, { type: 'image/jpeg' });
    //     }

    //     dispatch(addComment(dataArray));

    //     console.log(commentData.images);
    //     // window.location.replace("/postdetail")
    // }
    return (
        <div class='container-fluid PostDetail'>
            <div className='row'>
                <div class='col'>
    
                </div>
                <div class="col-6">
                    <div class='row'>
                        <article class="detail-article">
                            <header class='my-4'>
                                <h1 className='fw-bolder'>
                                    {
                                    // postDetail.title
                                    }
                                    Post Title
                                </h1>
                                <p class='text-muted fst-italic'>
                                    Username - Last edited{' '}
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
                            <section
                                className='mb-4 '
                                style={{ textAlign: 'justify' }}
                            >
                                <p className='lh-base mb-4 fs-5 lead'>
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                    This is the content for the post.
                                </p>

                            </section>
                        </article>
                        <hr class="sidebar-hr"/>
                        <CommentSection />
                    </div>
                </div>
                <div class='col'>
    
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
