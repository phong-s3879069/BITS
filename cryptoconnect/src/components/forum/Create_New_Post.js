import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost, getPostCategory } from '../../redux_BITS/actions/post'
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import * as moment from 'moment'

import './Forum.css';

export default function Create_New_Post() {
    const { authData } = useSelector((state) => state.authReducer)

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required')
            .matches(
                /^[a-zA-Z0-9 ?.,;$'"-_()@!%*#?&\/\\]+$/,
                'Title cannot contain certain special characters'
            ),
        content: Yup.string()
            .required('Content is required')
            .matches(
                /^[a-zA-Z0-9 ?,.;$'"-:+_()@!%*#?&\/\\(\r\n|\r|\n)]+$/,
                'Content cannot contain certain special characters. Be careful with apostrophe. The valid one is " \' "'
            ),
        images: Yup.mixed()
            .test('fileSize', 'The file is too large', (value) => {
                if (!value.length) {
                    return true; // attachment is optional
                }
                return value[0].size <= 2000000;
            })
            .test('fileType', 'Only jpeg/png file is accepted', (value) => {
                if (!value.length) {
                    return true; // attachment is optional
                }
                return (
                    value[0].type === 'image/jpeg' ||
                    value[0].type === 'image/png'
                );
            }),
        post_category_id: Yup.string().test('value', 'Post category is required', (value) => {
            if (value === '0') {
                return false;
            }
            return true;
        }),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostCategory());
    }, [dispatch])

    const post_categories = useSelector((state) => state.post_categories);

    const submit = (data) => {
        const dataArray = new FormData();
        dataArray.append('user_id', authData._id)
        dataArray.append('title',data.title);
        dataArray.append('content',data.content);
        dataArray.append('post_category_id', data.post_category_id);
        dataArray.append('images', data.images[0]);
        dispatch(addPost(dataArray))
        // e.preventDefault();
        // dispatch(addPost({...postData, user_id: authData?._id}))
        window.location.replace(`/forums/${data.post_category_id}`)
    }


    return (
        <div class="createpost">
        <div class="CreatePost">
            <div class='pt-3'>
                <div class='card mb-4'>
                    <div class='card-header text-center text-white'>
                        CREATE NEW POST
                    </div>

                    <div class='card-body container-fluid'>
                        <form
                            onSubmit={handleSubmit(submit)}
                            enctype='multipart/form-data'
                        >
                            <div class='row'>
                                <div class='form-group mb-3 col-7'>
                                    <label class="text-white">Title: </label>
                                    <input
                                        name="title"
                                        type='text'
                                        className={`form-control ${errors.title
                                            ? 'is-invalid'
                                            : ''}`}
                                        {...register('title')}
                                        placeholder='Post Title'
                                        
                                    />
                                    <div className='invalid-feedback'>
                                            {errors.title?.message}
                                    </div>
                                </div>
                                <div class='form-group mb-3 col-5'>
                                    <label class="text-white">
                                        Category
                                    </label>
                                    <div>
                                        <select name="post_category_id" className={`form-control ${errors.post_category_id
                                            ? 'is-invalid'
                                            : ''}`}
                                            {...register('post_category_id')} >    
                                            <option value="0" selected>
                                                Choose Category
                                            </option>
                                            {post_categories.map(element => {
                                                return (
                                                <option value={element._id}>
                                                    {element.name}
                                                </option>
                                                )
                                                
                                            })  
                                            }
                                        </select>
                                        <div className='invalid-feedback'>
                                            {errors.post_category_id?.message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='form-group mb-3'>
                                <label class="text-white">Content</label>
                                <textarea
                                    name="content" className={`form-control ${errors.content
                                        ? 'is-invalid'
                                        : ''}`}
                                    {...register('content')} 
                                    id="exampleFormControlTextarea1" 
                                    rows="5"
                                    placeholder='Post Content'
                                ></textarea>
                                <div className='invalid-feedback'>
                                            {errors.content?.message}
                                </div>
                            </div>
                            <div class='d-flex'>
                                <div class='form-group '>
                                    <div class='custom-file'>
                                        <label class='custom-file-label text-white'>
                                            Upload Image: 
                                        </label>
                                        {/* <br /> */}
                                        <input
                                        name="images" className={`form-control ${errors.images
                                            ? 'is-invalid'
                                            : ''}`}
                                        {...register('images')}  
                                        class='mx-2 text-white'type='file'/>
                                        <div className='invalid-feedback'>
                                            {errors.images?.message}
                                        </div>
                                    </div>
                                </div>

                                <span class='mx-auto'>
                                    &nbsp;&nbsp;
                                    <button type='submit' class='btn btn-success upload-btn'>
                                        Upload
                                    </button>
                                </span>
                            </div>               
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
