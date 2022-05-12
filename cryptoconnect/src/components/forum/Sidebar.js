import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPostCategory } from '../../redux_BITS/actions/post'
import './Forum.css'

export default function Sidebar({ post_categories, post_category_id }) {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPostCategory());
    // }, [dispatch])

    // const post_categories = useSelector((state) => state.post_categories);
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light mt-3 Sidebar text-light" style={{ "width": "100%;" }}>
            <span class="text-center text-light">Categories</span>
            <hr class="sidebar-hr" />
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href={`/forums/allcategory`} className={`nav-link text-light link-dark ${"allcategory" == post_category_id && 'active'}`}
                        style={{backgroundColor: `${"allcategory" == post_category_id && 'black'}` }}
                        aria-current="page">
                        All Categories
                    </a>
                </li>
                {post_categories && post_categories.map(element => {
                    return (
                        <li class="nav-item">
                            <a href={`/forums/${element._id}`} className={`nav-link text-light link-dark ${element._id == post_category_id && 'active'}`}
                                style={{backgroundColor: `${element._id == post_category_id && 'black'}` }}
                                aria-current="page">
                                {/* <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg> */}
                                {element.name}
                            </a>
                        </li>

                    )

                })
                }
            </ul>
            <hr class="sidebar-hr" />
            {/* <button type="button" class="btn btn-dark" onClick={props.showCreatePostForm ? e => props.showForm(false) : e => props.showForm(true)}>{props.showCreatePostForm ? "Close Form" : "Create New Post"}</button> */}
        </div>
    )
}