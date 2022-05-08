import './News_items_css.css';
import React from 'react';
import * as moment from 'moment'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function News_items({ news }) {
    const { authData, role } = useSelector((state) => state?.authReducer)
    const dispatch = useDispatch()
    return (
        <div class="card-container">
            <div class="card">
                <div class="card-header-container">
                    <div class="card-header-1">{moment(news?.createdAt).fromNow()}</div>
                    <div class="card-header-2">{news?.author}</div>
                </div>
                <a href={`/newsdetail/${news._id}`} style={{ "textDecoration": "none", color: "black" }}>
                    <div class="card-image-container">
                        <img
                            class="card-img-bottom img-fluid mx-auto d-block"
                            src={`https://cryptoconnect.s3.amazonaws.com/${news?.images}`}
                            alt="news-image"
                            style={{height: "200px"}}
                        />
                    </div>
                    <div class="card-body-container">
                        <header class="card-body-header">{news?.title}</header>

                        <p class="card-body-text text-light">
                            {news?.content && news?.content && news?.content.length > 400
                                ? news?.content.substring(0, 399) + '......'
                                : news?.content}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}