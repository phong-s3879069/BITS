import { useState } from "react"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { updateComment, deleteComment } from "../../redux_BITS/actions/post";
import * as moment from 'moment'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";

import { nl2br } from '../../utils/index'

export default function Comment_Section({ comment }) {

  const validationSchema = Yup.object().shape({
    content: Yup.string().trim()
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

  const [edit, setEdit] = useState(false);

  // const [commentData, setCommentData] = useState({
  //     _id: '6266755ae268d69e6807440e', content: '', images: null
  // })
  const post_id = useParams();

  const dispatch = useDispatch();

  const submit = (data) => {

    // const dataArray = new FormData();
    // dataArray.append("_id", comment._id);
    // dataArray.append("content", data.content);

    let commentUpdate = {
      _id: comment._id,
      content: data.content
    }
    // if (commentData.images != null) {
    //     dataArray.append("images", commentData.images, { type: 'image/jpeg' });
    // }


    dispatch(updateComment(commentUpdate));

  }
  const { authData } = useSelector((state) => state?.authReducer)
  console.log(comment.users)

  // console.log(comment)

  return (
    <div class="card">
      <div class="container-fluid">
        <div class="row justify-content-center my-1">
          <div class="col-11" style={{ backgroundColor: "lightgrey;" }}>
            <div class="row">
              {/* <div class="col-md-2 col-12 d-flex align-items-center justify-content-center">
                                <img src={`${comment?.users[0].avatar ? `https://crytoconnect.s3.amazonaws.com/${comment?.users[0].avatar}` : 'http://cdn.onlinewebfonts.com/svg/img_24787.png'} `}
                                    class="img-fluid rounded-circle m-2 w-80" alt=""></img>
                            </div> */}
              <div class="container">
                <div class="row row-cols-auto">
                  <div class="col">
                  <img src={`${comment?.users[0].avatar ? `https://cryptoconnect.s3.amazonaws.com/${comment?.users[0].avatar}` : 'http://cdn.onlinewebfonts.com/svg/img_24787.png'} `}
                  class="img rounded-circle m-2" width="40" height="40" alt=""></img>
                  </div>
                  <div class="col">
                  <label id="commentOwner">{comment?.users[0].name}</label>
                  </div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col">
                  {authData && authData._id === comment?.user_id && (edit == true
                  ? <div></div>
                  :
                  <div class="dropend d-flex">

                    <button type="button" class="btn btn-primary ms-auto dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu">
                      <li><button class="dropdown-item" onClick={() => setEdit(true)}>Edit</button></li>
                      <li><button class="dropdown-item" onClick={() => { dispatch(deleteComment(comment._id)); window.location.replace(`/postdetail/${post_id}`) }}>Delete</button></li>
                    </ul>
                  </div>
                )}
                  </div>
                </div>
              </div>
              <div class="col-md-10 col-12">
                <div class="row justify-content-end">
                  {/* <div class="col-md-3 col-12 text-md-end text-center me-2 my-2 ms-2"> */}
                  {moment(comment.updatedAt).fromNow()}
                  {/* </div> */}
                </div>

                <div class="row my-1">
                  {authData && authData._id === comment?.user_id && (edit == true
                    ? <form onSubmit={handleSubmit(submit)}>
                      <textarea name="content" className={`form-control ${errors.content
                        ? 'is-invalid'
                        : ''}`} {...register('content')} defaultValue={comment.content}>

                      </textarea>
                      <div className='invalid-feedback'>
                        {errors.content?.message}
                      </div>
                      <input name="_id" type="hidden" value={comment._id} />
                      <div class="d-flex my-3">
                        <button type="button" class="btn btn-danger me-auto" onClick={() => { dispatch(deleteComment(comment._id)); window.location.replace(`/postdetail/${post_id}`) }}>Delete</button>

                        <button type="button" class="btn btn-light me-2" onClick={() => setEdit(!edit)}>Cancel</button>
                        <button type="submit" class="btn btn-primary me-2">Save</button>

                      </div>
                    </form> :
                    <></>
                  )}
                  
                  <p class="me-2">{nl2br(comment.content)}</p>
                  
                  
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}