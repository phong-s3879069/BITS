import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import EditComment from '../forms/EditComment';
import './Forum.css'

export default function Comment_Section() {
  return (
    <div>
      <section class="CommentSection">
      <div class='mt-2'>
        <div class='card bg-light'>
          <div class='card-body container'>
            <h5>Comments</h5>
            <div class='row'>
              <form class='my-4'
              // onSubmit={handleSubmit}
              >
                <div className='form-floating'>
                  <textarea
                    className='form-control'
                    placeholder='Leave a comment here'
                    id='floatingTextarea2'
                    style={{
                      height: '100px',
                    }}
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-light mt-3 pull-right'
                >
                  Comment
                </button>
              </form>
            </div>
            {/* {fetchComment.length > 0 &&
                            fetchComment.map((item) => (
                                <CommentObject data={item} />
                            ))} */}
          </div>
        </div>
      </div>
    </section>
    <section>
    <div class='row'
    // key={_id}
    >
      <div class='d-flex mb-4'>
        <div class='flex-shrink-0'>
          <img
            class='rounded-circle'
            src='https://dummyimage.com/50x50/ced4da/6c757d.jpg'
            alt='...'
          />
        </div>
        <div class='ms-3'>
          <div class='fw-bold'>{
            // username
          }
            Username
          </div>
          {/* {isEditing ? (
                        <textarea
                            onChange={(e) =>
                                setUpdateDataComment(e.target.value)
                            }
                        >
                            {content}
                        </textarea>
                    ) : (
                        <div>{content}</div>
                    )} */}
          {/* { */}
          {/* user_id === currentUser.id && ( */}
          <div>
            <p>This is the content of the comment.</p>
          </div>
          <>
            <div className='btn btn-danger comment-btn'>
              Delete
            </div>
            <div className='btn comment-btn'>
              <EditComment/>
            </div>
          </>
        </div>
      </div>
    </div> 
    </section>
    </div>
    
  )
}
