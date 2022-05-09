import './Lessons_items_css.css';
import React from 'react';
import * as moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';

export default function Lessons_items({lessons}) {
    const { authData, role } = useSelector((state) => state?.authReducer)
    const dispatch = useDispatch()
    return (
        <div class="card-container">
            <div class="card">
                <div class="card-header-container">
                    <div class="card-header-1">{moment(lessons?.createdAt).fromNow()}</div>
                    <div class="card-header-2">{lessons?.author}</div>
                </div>
                <a href={`/lessondetail/${lessons._id}`} style={{ "textDecoration": "none", color: "black" }}>
                    <div class="card-image-container">
                        <img
                            class="card-img-bottom img-fluid mx-auto d-block"
                            src={`https://cryptoconnect.s3.amazonaws.com/${lessons?.images}`}
                            alt="lessons-image"
                            style={{height: "200px"}}
                        />
                    </div>
                    <div class="card-body-container">
                        <header class="card-body-header">{lessons?.title}</header>

                        <p class="card-body-text text-light">
                            {lessons?.content && lessons?.content && lessons?.content.length > 400
                                ? lessons?.content.substring(0, 399) + '......'
                                : lessons?.content}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}