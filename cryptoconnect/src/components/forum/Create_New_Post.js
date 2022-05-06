import React, { useState, useEffect } from 'react';
// import { yupResolver } from '@hookform/resolvers/yup';
import './Forum.css';

export default function Create_New_Post(props) {
    return (
        // <div class="createpost">
        <div class="CreatePost">
            <div class='pt-3'>
                <div class='card mb-4'>
                    <div
                        class='card-header text-center'
                        id='post-{{$post->id}}'
                    >
                        CREATE NEW POST
                    </div>

                    <div class='card-body container-fluid'>
                        <form
                            // onSubmit={handleSubmit(submit)}
                            enctype='multipart/form-data'
                        >
                            <div class='row'>
                                <div class='form-group mb-3 col-7'>
                                    <label for='posttitle'>Title: </label>
                                    <input
                                        type='text'
                                        class="form-control" 
                                        // class={`form-control border border-secondary ${
                                        //     errors.title ? 'is-invalid' : ''
                                        // }`}
                                        placeholder='Post Title'
                                        id='posttitle'
                                        // {
                                        //     ...register('title')}
                                        // onChange={(e) =>
                                        //     setTitle(e.target.value)
                                        // }
                                    />
                                    <div className='invalid-feedback'>
                                        {
                                        // errors.title?.message
                                        }
                                    </div>
                                </div>
                                <div class='form-group mb-3 col-5'>
                                    <label for='inputGroupSelect01'>
                                        Category
                                    </label>
                                    <div>
                                        <select
                                            // class={`custom-select  ${
                                            //     errors.cat ? 'is-invalid' : ''
                                            // }`}
                                        id='inputGroupSelect01'
                                            // style={{ height: '35px' }}
                                            // {...register('cat')}
                                            // onChange={(e) =>
                                            //     setId(e.target.value)
                                            // }
                                            class="form-control" 
                                            // id="exampleInputEmail1"
                                        >
                                            <option selected>
                                                Choose Category
                                            </option>
                                            <option>
                                                Category 1
                                            </option>
                                            <option>
                                                Category 2
                                            </option>
                                            <option>
                                                Category 3
                                            </option>
                                            
                                            {
                                            // .map((cate) => (
                                            //     <option value={cate._id}>
                                            //         {cate.name}
                                            //     </option>
                                            // ))
                                            }
                                        </select>
                                        <div className='invalid-feedback'>
                                            {/* {errors.cat?.message} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='form-group mb-3'>
                                <label for='postcontent'>Content</label>
                                <textarea
                                    class="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="5"
                                    // class={`form-control border border-secondary ${
                                    //     errors.content ? 'is-invalid' : ''
                                    // }`}
                                    placeholder='Post Content'
                                    // id= 'postcontent'
                                    // {
                                    //     ...register('content')}
                                    // onChange={(e) => {
                                    //     setContent(e.target.value);
                                    // }
                                // }
                                ></textarea>
                                <div className='invalid-feedback'>
                                   
                                </div>
                            </div>

                            <div class='form-group '>
                                <div class='custom-file'>
                                    <label
                                        class='custom-file-label'
                                        for='inputGroupFile01'
                                    >
                                        Upload Image: 
                                    </label>
                                    <br />
                                    <input
                                        type='file'
                                        // class={`custom-file-input ${
                                        //     errors.image ? 'is-invalid' : ''
                                        // }`}
                                        id='inputGroupFile01'
                                        // {
                                        //     ...register('image')}
                                        // onChange={(e) =>
                                        //     setFile(e.target.files[0])
                                        // }
                                    />
                                    <div className='invalid-feedback'>
                                        {
                                        // errors.image?.message
                                        }
                                    </div>
                                </div>
                            </div>

                            <span class='pull-right'>
                                &nbsp;&nbsp;
                                <button type='submit' class='btn btn-success upload-btn'>
                                    Upload
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
