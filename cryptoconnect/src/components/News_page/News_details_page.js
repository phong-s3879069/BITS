import './News_details_page.css';
import './News_items_css.css';
import News_items from './News_items';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsDetailIncludingCategory } from '../../redux_BITS/actions/news';
import { getNewsFromTopic } from '../../redux_BITS/actions/news';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as moment from 'moment'
import RelevantNews from './RelevantNews';
// import News_form from "./News_form";
// import EditNews from "./EditNews";

export default function News_details_page() {
    // const newsList = useSelector((state => state?.news))
    const news_detail = useSelector((state) => state.news_detail)
    const dispatch = useDispatch();
    const { authData, role } = useSelector((state) => state?.authReducer)
    const { news_id } = useParams();

    const news_detail_category = news_detail[0]?.news_categories[0]._id;
    // console.log(news_detail_category)
    useEffect(() => {
        dispatch(getNewsDetailIncludingCategory(news_id));
        // dispatch(getNewsFromTopic(news_detail_category))
        // dispatch(getCommentForPostIncludingAva(post_id));
        // dispatch(getPostDetail(post_id));
        // dispatch(getCommentForPost(post_id));
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
                                    {news_detail[0]?.title}
                                </h1>
                                {authData?._id === news_detail[0]?.user_id && <a href={`/editnews/${news_detail[0]?._id}`} class="btn btn-warning ms-auto">EDIT THIS NEWS</a>}
                                <p>Last Updated: {moment(news_detail[0]?.updatedAt).fromNow()}</p>
                                <hr class="sidebar-hr" />
                                <p class='fw-normal'>
                                    Categories:
                                    <button class='btn btn-light btn-sm cat-button'>
                                        {news_detail[0]?.news_categories[0].name}
                                    </button>
                                </p>
                            </header>
                            <div class="img mb-3">
                                {news_detail[0]?.images && news_detail[0]?.images != '' ? <img
                                    class="card-img-bottom img-fluid news-img mx-auto d-block"
                                    src={`https://cryptoconnect.s3.amazonaws.com/${news_detail[0]?.images}`}
                                    alt="news-image" /> : <></>}



                            </div>
                            <section
                                className='mb-4 '
                                style={{ textAlign: 'justify' }}
                            >
                                <p class="text-break">{news_detail[0]?.content}</p>

                            </section>
                            <hr class="sidebar-hr" />
                        </article>
                        <hr class="sidebar-hr" />
                    </div>
                </div>
                <div class='col'>

                </div>
            </div>
            <div className='news_relate_container news_container'>
                <div className="news_body_header" style={{ marginTop: '0%' }}>Relevant news</div>
                <div className="container">
                    <RelevantNews news_cat={news_detail_category}/>
                </div>
            </div>
        </div>
    )
}
