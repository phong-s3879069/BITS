import React, { Component } from 'react';
import './News_form.css';
import './EditNewsCss.css';
import axios from 'axios'

export default function EditNews() {
    return(
        <div>
            <button type="button" className="form-create-button" data-bs-toggle="modal" data-bs-target="#editPost">
                Edit
            </button>
            <div className="modal" id="editPost" aria-labelledby="editFunctionModel" aria-hidden="true" tabIndex="-1">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row mb-3">
                                    <h3 className="text-center">EDIT NEWS</h3>
                                </div>
                                <br/>
                                <form>
                                    <div className = 'form-container'>
                                        <div className = 'form-group'>
                                            <div className = 'form-body-title'>Title</div>
                                            <textarea className="form-control"  id='contentInput' rows="1" placeholder='Enter title'/>
                                        </div>
                                        <div className = 'form-group'>
                                            <div className='form-category'>Category</div>
                                            <select className='form-control' style= {{width: '20%', marginBottom: '3%'}} id='categorySelect'>
                                                <option>Category 1</option>
                                                <option>Category 2</option>
                                                <option>Category 3</option>
                                            </select>
                                        </div>
                                        <div className = 'form-group'>
                                            <div className = 'form-body-title'>Content</div>
                                            <textarea className ="form-control" id='contentInput' rows="20" placeholder='Write something here'/>
                                        </div>
                                        <div className = 'form-group'>
                                            <input type='file' className = 'form-control-file form-button-container' id='addImage' placeholder = 'Add image'></input>
                                            <button type='submit' className = 'form-create-button form-button-container' id = 'create'>Edit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}