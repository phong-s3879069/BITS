import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import { updateProfile } from '../../redux_sepm/api/user';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import { getRole } from '../../redux_sepm/actions/user';

import { updateAva, updateProfile } from '../../redux_BITS/actions/profile'
// import { useState } from "react"

export function EditProfile() {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .required('Name is required')
            .max(50, 'Name must not exceed 50 characters')
            .matches(
                /^(?![ ]+$)[a-zA-Z .]*$/,
                'Name must only contain letters and space'
            ),
        username: Yup.string()
            .trim()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(15, 'Username must not exceed 15 characters')
            .matches(
                /^[a-zA-Z0-9_]+$/,
                'Username must only contain letters, numbers, or "_"'
            ),
        email: Yup.string()
            .trim()
            .required('Email is required')
            .email('Email is invalid'),
        bio: Yup.string().trim()
            .required('Content is required')
            .matches(
                /^[a-zA-Z0-9 ?,.$'"-:+_();@!%*#?&\/\\(\r\n|\r|\n)]+$/,
                'Content cannot contain certain special characters. Be careful with apostrophe. The valid one is " \' "'
            ),
        // images: Yup.mixed()

        //     .test('fileSize', 'The file is too large', (value) => {
        //         if (!value.length) {
        //             return true; // attachment is optional
        //         }
        //         return value[0].size <= 2000000;
        //     })
        //     .test('fileType', 'Only jpeg/png file is accepted', (value) => {
        //         if (!value.length) {
        //             return true; // attachment is optional
        //         }
        //         return (
        //             value[0].type === 'image/jpeg' ||
        //             value[0].type === 'image/png'
        //         );
        //     }),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { authData } = useSelector((state) => state?.authReducer)
    console.log(authData)
    const dispatch = useDispatch();
    const submit = (data) => {

        // const dataArray = new FormData();
        // dataArray.append("_id", comment._id);
        // dataArray.append("content", data.content);

        let profileUpdate = {
            _id: authData._id,
            username: data.username,
            name: data.name,
            email: data.email,
            bio: data.bio
        }
        // if (commentData.images != null) {
        //     dataArray.append("images", commentData.images, { type: 'image/jpeg' });
        // }


        dispatch(updateProfile(profileUpdate));
        console.log(profileUpdate)

    }

    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <form class="row" onSubmit={handleSubmit(submit)}>
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Personal Information</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">

                                    <div class="col-12">


                                        <div class="mx-1">
                                            <h6>Username</h6>
                                            {/* defaultValue={authData.username} */}
                                            <input type="text" name="username" className={`form-control mb-3 ${errors.username
                        ? 'is-invalid'
                        : ''}`} {...register('username')}
                                                // defaultValue={authData.username} 
                                                aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            <div className='invalid-feedback'>
                                                {errors.username?.message}
                                            </div>
                                            <h6>Name</h6>
                                            <input type="text" name="name"  className={`form-control mb-3 ${errors.name
                        ? 'is-invalid'
                        : ''}`} {...register('name')}
                                                //  defaultValue={authData.name} 
                                                aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            <div className='invalid-feedback'>
                                                {errors.name?.message}
                                            </div>
                                            <h6>Email</h6>
                                            <input type="text" name="email"  className={`form-control mb-3 ${errors.email
                        ? 'is-invalid'
                        : ''}`} {...register('email')}
                                                //  defaultValue={authData.email}
                                                aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            <div className='invalid-feedback'>
                                                {errors.email?.message}
                                            </div>
                                            <h6>Bio</h6>
                                            <textarea  className={`form-control ${errors.bio
                        ? 'is-invalid'
                        : ''}`} {...register('bio')} name="bio"
                                                //  defaultValue={authData.bio}
                                                id="FunctionDescription" rows="2"></textarea>
                                            <div className='invalid-feedback'>
                                                {errors.bio?.message}
                                            </div>
                                            {/* <h6>Contact</h6>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://uploads-ssl.webflow.com/604f62b336573137786d8b67/6069a6cb43ba4018a72d9acb_twitter.png" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" class="rounded-circle mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div> */}

                                        </div>



                                    </div>

                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export function EditAvatar() {

    const [ava, setAva] = useState(null);
    const { authData } = useSelector((state) => state.authReducer)

    console.log(authData);

    const validationSchema = Yup.object().shape({
        avatar: Yup.mixed()

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

    const submitAva = () => {

        const dataArray = new FormData();

        dataArray.append("avatar", ava);
        dispatch(updateAva(authData._id, dataArray));

        console.log(ava, authData._id);
        window.location.replace(`/profile/${authData._id}`)
    }

    function showPreview(event) {
        if (event.target.files.length > 0) {
            if (event.target.files[0].type.split("/")[0] == "image") {
                // console.log(event.target.files[0].type.split("/")[0]);
                var src = URL.createObjectURL(event.target.files[0]);
                var preview = document.getElementById("ava-preview");
                preview.src = src;
                preview.style.display = "block";
            } else {
                var preview = document.getElementById("ava-preview");
                preview.src = "http://cdn.onlinewebfonts.com/svg/img_24787.png";
                preview.style.display = "block";
            }
        }
    }

    return (
        <div>
            <button class="btn btn-primary me-auto" data-bs-toggle="modal" data-bs-target="#editAvaModal">

                <i class="bi bi-camera-fill"></i>

            </button>
            <div class="modal fade" id="editAvaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form encType="multipart/form-data" onSubmit={handleSubmit(submitAva)}>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Profile Picture</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <img src="http://cdn.onlinewebfonts.com/svg/img_24787.png" id="ava-preview" class="rounded-circle mx-auto my-auto d-block" width="200" height="200" style={{ objectfit: "cover" }} alt="Profile Image" />
                                <h6 class="text-center my-2">Preview Image</h6>

                                <div class="my-3">
                                    <label for="formFile" class="form-label">Upload image from computer</label>
                                    <input type="file" id="formFile" name="avatar" className={`form-control ${errors.avatar
                                        ? 'is-invalid'
                                        : ''}`} {...register('avatar')} onChange={(e) => { showPreview(e); setAva(e.target.files[0]) }} />
                                    <div className='invalid-feedback'>
                                        {errors.avatar?.message}
                                    </div>
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}