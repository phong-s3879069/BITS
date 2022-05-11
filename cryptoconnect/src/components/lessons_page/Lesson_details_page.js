// import './News_details_page.css';
// import './News_items_css.css';
// import News_items from './News_items';
import Lessons_items from './Lessons_items';
import './Lesson_details_page.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getNewsDetailIncludingCategory } from '../../redux_BITS/actions/news';
import { getLessonDetailIncludingCategory } from '../../redux_BITS/actions/lesson';
// import { getNewsFromTopic } from '../../redux_BITS/actions/news';
import { getLessonsFromTopic } from '../../redux_BITS/actions/lesson';
import RelevantLesson from './RelevantLesson';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as moment from 'moment'
// import News_form from "./News_form";
// import EditNews from "./EditNews";

export default function Lesson_details_page() {
    const lesson_detail = useSelector((state => state?.lesson_detail))
    const dispatch = useDispatch();
    const { authData, role } = useSelector((state) => state?.authReducer)
    const { lesson_id } = useParams();
    const lesson_detail_category = lesson_detail[0]?.lesson_categories[0]._id;
    // console.log(news_detail_category)
    useEffect(() => {
        dispatch(getLessonDetailIncludingCategory(lesson_id));
    }, [dispatch])




    // useEffect(() => {
    //     dispatch(getNewsFromTopic(news_detail_category))
    // }, [dispatch])
    return (
        <div class='container-fluid PostDetail'>
            <div className='row'>
                <div class='col'>

                </div>
                <div class="col-6">
                    <div class='row'>
                        <article class="detail-article">
                            {/* <div style={{float: 'right', marginRight: '5%'}}><EditNews/></div> */}
                            <header class='my-4'>
                                <h1 className='fw-bolder'>
                                    {lesson_detail[0]?.title}
                                </h1>
                                {authData?._id === lesson_detail[0]?.user_id && <a href={`/editlesson/${lesson_detail[0]?._id}`} class="btn btn-warning ms-auto">EDIT THIS LESSON</a>}
                                <p>Last Updated: {moment(lesson_detail[0]?.updatedAt).fromNow()}</p>
                                <hr class="sidebar-hr" />
                                <p class='fw-normal'>
                                    Categories:
                                    <button class='btn btn-light btn-sm cat-button'>
                                        {lesson_detail[0]?.lesson_categories[0].name}
                                    </button>
                                </p>
                            </header>
                            <div class="img mb-3">
                                {lesson_detail[0]?.images && lesson_detail[0]?.images != '' ? <img
                                    class="card-img-bottom img-fluid lesson-img mx-auto d-block"
                                    src={`https://cryptoconnect.s3.amazonaws.com/${lesson_detail[0]?.images}`}
                                    alt="lesson-image" /> : <></>}



                            </div>
                            <section
                                className='mb-4 '
                                style={{ textAlign: 'justify' }}
                            >
                                <p class="text-break">{lesson_detail[0]?.content}</p>

                            </section>
                            <hr class="sidebar-hr" />
                        </article>
                        <hr class="sidebar-hr" />
                    </div>
                </div>
                <div class='col'>

                </div>
            </div>
            <div className='lesson_relate_container lesson_container'>
                <div className="lesson_body_header" style={{ marginTop: '0%' }}>Relevant lesson</div>
                <div className="container">
                    <RelevantLesson lesson_cat={lesson_detail_category}/>
                </div>
            </div>
        </div>
    )
}
