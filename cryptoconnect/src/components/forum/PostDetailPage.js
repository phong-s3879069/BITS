import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetail, getCommentForPost, getPostDetailIncludingCategory, getCommentForPostIncludingAva, dislike, like } from "../../redux_BITS/actions/post";
import { useParams } from "react-router-dom";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as moment from 'moment'
import { addComment } from "../../redux_BITS/actions/post";
import Sidebar from './Sidebar';
import './Forum.css'
import EditPost from '../forms/EditPost';
import Comment_Section from './Comment_Section';

const PostDetail = () => {
    const dispatch = useDispatch();
    const { authData, role } = useSelector((state) => state?.authReducer)
    const validationSchema = Yup.object().shape({
        content: Yup.string().trim()
            .required('Content is required')
            .matches(
                /^[a-zA-Z0-9 ?,.$'"-:+_();@!%*#?&\/\\(\r\n|\r|\n)]+$/,
                'Content cannot contain certain special characters. Be careful with apostrophe. The valid one is " \' "'
            ),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const { post_id } = useParams();

    useEffect(() => {
        dispatch(getPostDetailIncludingCategory(post_id));
        dispatch(getCommentForPostIncludingAva(post_id));
        // dispatch(getPostDetail(post_id));
        // dispatch(getCommentForPost(post_id));
    }, [dispatch])


    const post_detail = useSelector((state) => state.posts)
    const post_comments = useSelector((state) => state.comment)
    console.log(post_comments)

    const submit = (data) => {

        let comment = {
            post_id: post_id,
            user_id: authData._id,
            content: data.content
        }
        
        

        dispatch(addComment(comment));
        console.log(data.content)

        // console.log(commentData.images);
        window.location.replace(`/postdetail/${post_id}`)
    }
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
                                    {post_detail[0]?.title}
                                </h1>
                                {authData?._id === post_detail[0]?.user_id && <a href={`/editpost/${post_detail[0]?._id}`} class="btn btn-warning ms-auto">EDIT THIS POST</a>}
                                <p>Last Updated: {moment(post_detail[0]?.updatedAt).fromNow()}</p>
                                <hr class="sidebar-hr" />
                                <p class='fw-normal'>
                                    Categories:
                                    <button class='btn btn-light btn-sm cat-button'>
                                        {post_detail[0]?.post_categories[0].name}
                                    </button>
                                </p>
                            </header>
                            <div class="img mb-3">
                            {post_detail[0]?.images && post_detail[0]?.images != '' ? <img
                                    class="card-img-bottom img-fluid post-img mx-auto d-block"
                                    src={`https://cryptoconnect.s3.amazonaws.com/${post_detail[0]?.images}`}
                                    alt="post-image"/> : <></>}

                                
                                
                            </div>
                            <section
                                className='mb-4 '
                                style={{ textAlign: 'justify' }}
                            >
                                <p class="text-break">{post_detail[0]?.content}</p>

                            </section>
                            <hr class="sidebar-hr" />
                            <div class="row justify-content-center" >
                                {authData && <div class="col-10 mt-3 py-2">
                                    <form onSubmit={handleSubmit(submit)}>
                                        <div class="input-group my-2">
                                            <textarea name="content" className={`form-control ${errors.content
                                                ? 'is-invalid'
                                                : ''}`} placeholder="Enter Comment Here..."
                                                id="FunctionResult" {...register('content')}  rows="2" ></textarea>
                                            <div className='invalid-feedback'>
                                                {errors.content?.message}
                                            </div>
                                        </div>
                                        <input name="post_id" type="hidden" value={post_id} />
                                        
                                        <div class="d-grid gap-2 d-flex">
                                            <button type="submit" class="btn btn-primary ms-auto">Submit</button>
                                        </div>
                                    </form>
                                </div>}
                                <div class="col-10 mt-3" >
                                    {post_comments.map(element => {
                                        return (
                                            <Comment_Section comment={element} />
                                        )

                                        }
                                    )}
                                </div>

                            </div>
                        </article>
                        <hr class="sidebar-hr" />
                    </div>
                </div>
                <div class='col'>

                </div>
            </div>
        </div>
    );
};

export default PostDetail;