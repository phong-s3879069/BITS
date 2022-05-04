import React from 'react';
import Sidebar from './Sidebar';
import CommentSection from './Comment_Section';
import './Forum.css'
import EditPost from '../forms/EditPost';


// import { countTimeDiff } from '../../utils';

const PostDetail = () => {

    return (
        <div class='container-fluid PostDetail'>
            <div className='row'>
                <div class='col'>
    
                </div>
                <div class="col-6">
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
                <div class='col'>
    
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
