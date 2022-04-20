export default function EditPost() {
    return (
        <div class="container-fluid" style={{ marginTop: 80, marginBottom: 80 }}>
            <div className="row justify-content-center">
                <div className='card mb-4 col-6'>
                    <div className='card-header text-center'>
                        EDIT POST
                    </div>

                    <div className='card-body container-fluid'>
                        <form enctype='multipart/form-data'>
                            <div className='row'>
                                <div className='form-group mb-3 col-7'>
                                    <label for='posttitle'>Title</label>
                                    <input type='text' name="title" className="form-control border border-secondary" placeholder='Post Title' id='posttitle' />
                                    {/* <div className='invalid-feedback'>
                                        {errors.title?.message}
                                    </div> */}
                                </div>
                                <div className='form-group mb-3 col-5'>
                                    <label for='postcate'>
                                        Category
                                    </label>
                                    <div>
                                        <input type='text' name="title" className="form-control border border-secondary" placeholder='Post Title' id='postcate' />
                                        {/* <div className='invalid-feedback'>
                                            {errors.cat?.message}
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className='form-group mb-3'>
                                <label for='postcontent'>Content</label>
                                <textarea className="form-control border border-secondary" placeholder='Post Content' name="content" id='postcontent'></textarea>
                                {/* <div className='invalid-feedback'>
                                    {errors.content?.message}
                                </div> */}
                            </div>

                            <div className='form-group mb-3'>
                                <div className='custom-file'>
                                    <label className='custom-file-label' for='postimage'>
                                        Upload Image
                                    </label>
                                    <br />
                                    <input type='file' className="custom-file-input" name="image" id='postimage' />
                                    {/* <div className='invalid-feedback'>
                                        {errors.image?.message}
                                    </div> */}
                                </div>
                            </div>

                            <div className="d-grid gap-2 d-flex justify-content-end">
                                &nbsp;&nbsp;
                                <button type='button' className='btn btn-danger'>
                                    DELETE THIS POST
                                </button>
                                <button type='submit' className='btn btn-success'>
                                    SAVE CHANGES
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}