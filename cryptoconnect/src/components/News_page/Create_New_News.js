import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNews, getNewsCategory } from '../../redux_BITS/actions/news'
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import * as moment from 'moment'

import './Create_News.css';

export default function Create_New_News() {
    const { authData } = useSelector((state) => state.authReducer)

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required')
            .matches(
                /^[a-zA-Z0-9 ?.,;$'"-_()@!%*#?&\/\\]+$/,
                'Title cannot contain certain special characters'
            ),
        author: Yup.string()
            .required('Author is required')
            .matches(
                /^[a-zA-Z0-9 ?.,;$'"-_()@!%*#?&\/\\]+$/,
                'Author cannot contain certain special characters'
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
        news_category_id: Yup.string().test('value', 'News category is required', (value) => {
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
        dispatch(getNewsCategory());
    }, [dispatch])

    const news_categories = useSelector((state) => state.news_categories);

    const submit = (data) => {
        const dataArray = new FormData();
        dataArray.append('user_id', authData._id)
        dataArray.append('title', data.title);
        dataArray.append('author', data.author);
        dataArray.append('content', data.content);
        dataArray.append('news_category_id', data.news_category_id);
        dataArray.append('images', data.images[0]);
        dispatch(addNews(dataArray))
        // e.preventDefault();
        // dispatch(addPost({...postData, user_id: authData?._id}))
        window.location.replace(`/news_page/${data.news_category_id}`)
    }


    return (
        <div class="createnews">
            <div class="CreateNews">
                <div class='pt-3'>
                    <div class='card mb-4'>
                        <div class='card-header text-center text-white'>
                            CREATE NEW NEWS
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
                                            placeholder='News Title'

                                        />
                                        <div className='invalid-feedback'>
                                            {errors.title?.message}
                                        </div>
                                    </div>
                                    <div class='form-group mb-3 col-7'>
                                        <label class="text-white">Author </label>
                                        <input
                                            name="author"
                                            type='text'
                                            className={`form-control ${errors.author
                                                ? 'is-invalid'
                                                : ''}`}
                                            {...register('author')}
                                            placeholder='News Author'

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
                                            <select name="news_category_id" className={`form-control ${errors.news_category_id
                                                ? 'is-invalid'
                                                : ''}`}
                                                {...register('news_category_id')} >
                                                <option value="0" selected>
                                                    Choose Category
                                                </option>
                                                {news_categories?.map(element => {
                                                    return (
                                                        <option value={element._id}>
                                                            {element.name}
                                                        </option>
                                                    )

                                                })
                                                }
                                            </select>
                                            <div className='invalid-feedback'>
                                                {errors.news_category_id?.message}
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
                                        placeholder='News Content'
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
                                                class='mx-2 text-white' type='file' />
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
